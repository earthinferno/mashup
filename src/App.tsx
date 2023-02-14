import React, { useEffect, useState } from "react";

import "./App.css";
import { MashGrid } from "./components/mashGrid";
import { getNextStatus } from "./helpers/selector";
import { IOption } from "./types";

const mockData = [
  { label: "Vicky", category: "love", god: "help me" },
  { label: "Jane", category: "love" },
  { label: "Holly", category: "love" },
  { label: "Rose", category: "love" },
  { label: "Fire Person", category: "job" },
  { label: "Racing Driver", category: "job" },
  { label: "Astronaut", category: "job" },
  { label: "Diver", category: "job" },
  { label: "£10", category: "money" },
  { label: "£1000", category: "money" },
  { label: "£1000000", category: "money" },
  { label: "£9999999", category: "money" },
  { label: "Car", category: "vehicle" },
  { label: "Motorbike", category: "vehicle" },
  { label: "Speed Boat", category: "vehicle" },
  { label: "Rocket", category: "vehicle" },
];

function App() {
  const [mashOptions, setMashOptions] = useState<IOption[]>();
  //setMashOptions(mockData as IOption[]);

  const updatedMashOptions = (options: IOption[], startIndex: number) => {
    setTimeout(() => {
      const optionsCopy = JSON.parse(JSON.stringify(options));
      const [index, status] = getNextStatus(optionsCopy, startIndex, 13);

      optionsCopy[index].selected = status;

      setMashOptions(optionsCopy);
      const blah = optionsCopy.filter((option) => option.hasOwnProperty("selected")).length;
      if (blah < optionsCopy.length) {
        updatedMashOptions(optionsCopy, index);
      }
    }, 600);
  };

  useEffect(() => {
    //@ts-ignore
    updatedMashOptions(mockData, 0);
  }, []);

  return (
    <div className="App">
      <div>Hello</div>
      {mashOptions && <MashGrid options={mashOptions} />}
    </div>
  );
}

export default App;
