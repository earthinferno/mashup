import { Category, IOption } from "../types";

// get next option status
type OptionStatus = [number | undefined, boolean];
export const getNextStatus = (options: IOption[], start: number, skip: number): OptionStatus => {
  // Put the next option MASH from at the start of the array
  const sortedOptions = options.slice(start).concat(options.slice(0, start));

  // Remove any discounted options
  const availableOptions = sortedOptions.filter((option) => !option.hasOwnProperty("selected"));

  // If the skip amount is > array.length then just use the divisor as the array index
  const index = (skip > availableOptions.length ? getIndexRemainder(skip, availableOptions.length) : skip) - 1;
  const next = options.findIndex(
    (option) => option.label === availableOptions[index].label && option.category === availableOptions[index].category
  );
  // This should never happen!!!!.
  if (next === -1) {
    throw new Error("Unable to find option");
  }

  // Figure out what the status should be (option discounted or selected)
  const status = getSelectedStatus(options, availableOptions[index].category);
  return [next, status];
};

const getIndexRemainder = (skip: number, length: number) => {
  const remainder = skip % length;
  return remainder > 0 ? remainder : length;
};

const getSelectedStatus = (options: IOption[], category: Category) => {
  const categoryOptions = options.filter(
    (option) => option.category === category && !option.hasOwnProperty("selected")
  );

  if (categoryOptions.length === 1) {
    return true;
  }
  return false;
};
