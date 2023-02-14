import React, { useState } from "react";
import { IOption } from "../types";

interface OptionBoxProps {
  optionList: IOption[];
}

export const OptionBox = (props: OptionBoxProps) => {
  const { optionList } = props;
  return (
    <>
      {optionList.map((option) => (
        <div key={option.label}>
          <span>{option.label}</span>
          <span>{"    "}</span>
          <span>{!option.hasOwnProperty("selected") ? "" : option.selected ? "✅" : "❌"}</span>
        </div>
      ))}
    </>
  );
};
