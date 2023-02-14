import { IOption } from "../types";
import { getNextStatus } from "./selector";

describe("getNextStatus", () => {
  it("works", () => {
    const optionList: IOption[] = [
      { label: "Sarah", category: "love" },
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

    const result = getNextStatus(optionList, 0, 4);

    expect(result).toEqual([3, false]);
  });

  it("filters okay1", () => {
    const optionList: IOption[] = [
      { label: "Sarah", category: "love" },
      { label: "Jane", category: "love" },
      { label: "Holly", category: "love", selected: false },
      { label: "Rose", category: "love" },
      { label: "Fire Person", category: "job" },
      { label: "Racing Driver", category: "job", selected: false },
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

    const result = getNextStatus(optionList, 5, 3);

    expect(result).toEqual([8, false]);
  });

  it("filters okay2", () => {
    const optionList: IOption[] = [
      { label: "Sarah", category: "love" },
      { label: "Jane", category: "love" },
      { label: "Holly", category: "love", selected: false },
      { label: "Rose", category: "love" },
      { label: "Fire Person", category: "job" },
      { label: "Racing Driver", category: "job", selected: false },
      { label: "Astronaut", category: "job" },
      { label: "Diver", category: "job" },
    ];

    const result = getNextStatus(optionList, 5, 3);

    expect(result).toEqual([0, false]);
  });

  it("filters okay3", () => {
    const optionList: IOption[] = [
      { label: "Sarah", category: "love", selected: false },
      { label: "Jane", category: "love", selected: false },
      { label: "Holly", category: "love", selected: false },
      { label: "Rose", category: "love" },
      { label: "Fire Person", category: "job", selected: false },
      { label: "Racing Driver", category: "job", selected: false },
      { label: "Astronaut", category: "job", selected: false },
      { label: "Diver", category: "job" },
    ];

    const result = getNextStatus(optionList, 3, 3);

    expect(result).toEqual([3, true]);
  });
});
