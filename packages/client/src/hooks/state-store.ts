import create from "zustand";
import { IEmail, ISheet } from "../core";

export interface IState {
  numSteps: number;
  currentStep: number;
  googleSheetLink: string;
  sheet?: ISheet;
  email: IEmail;
  importGoogleSheet(googleSheetLink: string, sheet: ISheet): void;
  setEmail(email: IEmail): void;
  next(): void;
  back(): void;
}

export const useStateStore = create<IState>((set) => ({
  numSteps: 4,
  currentStep: 1,
  googleSheetLink: "",
  email: {
    to: "",
    subject: "",
    body: "",
  },
  importGoogleSheet: (googleSheetLink: string, sheet: ISheet) =>
    set((state) => {
      return {
        ...state,
        googleSheetLink,
        sheet,
      };
    }),
  setEmail: (email) => set((state) => ({ ...state, email })),
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
