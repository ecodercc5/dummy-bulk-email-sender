import create from "zustand";
import { ISheet } from "../core";

export interface IState {
  numSteps: number;
  currentStep: number;
  googleSheetLink: string;
  sheet?: ISheet;
  importGoogleSheet(googleSheetLink: string, sheet: ISheet): void;
  next(): void;
  back(): void;
}

export const useStateStore = create<IState>((set) => ({
  numSteps: 4,
  currentStep: 1,
  googleSheetLink: "",
  importGoogleSheet: (googleSheetLink: string, sheet: ISheet) =>
    set((state) => {
      return {
        ...state,
        googleSheetLink,
        sheet,
      };
    }),
  next: () =>
    set((state) => {
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    }),
  back: () => {
    set((state) => {
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    });
  },
}));
