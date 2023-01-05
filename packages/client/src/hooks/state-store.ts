import create from "zustand";

export interface ISheet {
  id: string;
  range: string;
  headers: string[];
  rows: ISheetRow[];
}

export interface ISheetRow {
  [header: string]: any;
}

export interface IState {
  numSteps: number;
  currentStep: number;
  googleSheetLink: string;
  sheet?: ISheet;
}

export const useStateStore = create<IState>((set) => ({
  numSteps: 4,
  currentStep: 1,
  googleSheetLink: "",
}));
