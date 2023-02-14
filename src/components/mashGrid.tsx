import React, { useEffect, useState } from "react";
import { IOption } from "../types";
import styled from "styled-components";
import { OptionBox } from "./optionBox";

interface MashGridProps {
  options: IOption[];
}

export const MashGrid = (props: MashGridProps) => {
  const { options } = props;
  const categories = [...new Set(options.map((option) => option.category))];

  const categoryOptions = categories.map((category) => ({
    category: category,
    options: options.filter((option) => option.category === category),
  }));

  return (
    <Grid>
      {categoryOptions.map((categoryOption) => (
        <div key={categoryOption.category}>
          <div> {categoryOption.category} </div>
          <OptionBox optionList={categoryOption.options} />
        </div>
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: flex;
`;
