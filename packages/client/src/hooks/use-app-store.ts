import create from "zustand";
import { ISheet } from "../core";

export enum Step {
  ImportSpreadSheet = "ImportSpreadSheet",
  PreviewSpreadSheet = "PreviewSpreadSheet",
}

type Actions = {
  importSpreadSheet(googleSheetLink: string, sheet: ISheet): void;
  selectNewSpreadSheet(): void;
  canContinue(): boolean;
  next(): void;
  back(): void;
};
type BaseState = { type: Step };

type SpreadSheetImported = {
  googleSheetLink: string;
  sheet: ISheet;
  sheetImported: true;
};

type SpreadSheetNotImported = {
  sheetImported: false;
};

type SpreadSheetImportedState = {
  type: Step.ImportSpreadSheet;
} & SpreadSheetImported;

type SpreadSheetNotImportedState = {
  type: Step.ImportSpreadSheet;
} & SpreadSheetNotImported;

type ImportSpreadSheetState =
  | SpreadSheetImportedState
  | SpreadSheetNotImportedState;

type PreviewSpreadSheetState = {
  type: Step.PreviewSpreadSheet;
} & SpreadSheetImported;

type AppState = ImportSpreadSheetState | PreviewSpreadSheetState;

export const useAppStore = create<AppState & Actions>((set, get) => ({
  type: Step.ImportSpreadSheet,
  sheetImported: false,
  importSpreadSheet: (googleSheetLink, sheet) =>
    set((state) => {
      if (state.type === Step.ImportSpreadSheet && !state.sheetImported) {
        const { sheetImported, ...rest } = state;

        return {
          ...rest,
          sheetImported: true,
          googleSheetLink,
          sheet,
        } as SpreadSheetImportedState;
      }
      return state;
    }),
  selectNewSpreadSheet: () =>
    set((state) => {
      return state;
    }),
  canContinue: () => {
    const state = get();

    switch (state.type) {
      case Step.ImportSpreadSheet: {
        return state.sheetImported;
      }
      default:
        return false;
    }
  },
  next: () =>
    set((state) => {
      if (state.type === Step.ImportSpreadSheet) {
        if (state.canContinue()) {
          const { type, ...rest } = state as SpreadSheetImportedState;

          return {
            ...rest,
            type: Step.PreviewSpreadSheet,
          } as PreviewSpreadSheetState;
        }

        return state;
      }

      return state;
    }),
  back: () =>
    set((state) => {
      switch (state.type) {
        case Step.PreviewSpreadSheet:
          return {
            ...state,
            type: Step.ImportSpreadSheet,
          } as SpreadSheetImportedState;
      }

      return state;
    }),
}));
