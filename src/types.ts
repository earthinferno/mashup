export type Category = "love" | "job" | "money" | "vehicle";

export interface IOption {
  label: string;
  category: Category;
  selected?: boolean;
}
