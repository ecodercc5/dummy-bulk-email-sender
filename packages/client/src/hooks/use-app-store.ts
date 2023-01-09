import create from "zustand";
import { ISheet } from "../core";

export enum Step {
  ImportSpreadSheet = "ImportSpreadSheet",
  PreviewSpreadSheet = "PreviewSpreadSheet",
}

type Actions = {
  importSpreadSheet(link: string, data: ISheet): void;
  selectNewSpreadSheet(): void;
  canContinue(): boolean;
  next(): void;
  back(): void;
};
type BaseState = { type: Step };

type SpreadSheetImported = {
  link: string;
  data: ISheet;
  imported: true;
};

type SpreadSheetNotImported = {
  imported: false;
};

type ImportSpreadSheetBaseState = { type: Step.ImportSpreadSheet };
type PreviewSpreadSheetBaseState = { type: Step.PreviewSpreadSheet };

type SpreadSheetImportedState = ImportSpreadSheetBaseState & {
  sheet: SpreadSheetImported;
};

type SpreadSheetNotImportedState = ImportSpreadSheetBaseState & {
  sheet: SpreadSheetNotImported;
};

type ImportSpreadSheetState =
  | SpreadSheetImportedState
  | SpreadSheetNotImportedState;

type PreviewSpreadSheetState = PreviewSpreadSheetBaseState &
  SpreadSheetImported;

type AppState = ImportSpreadSheetState | PreviewSpreadSheetState;

export const useAppStore = create<AppState & Actions>((set, get) => ({
  type: Step.ImportSpreadSheet,
  sheet: {
    imported: false,
  },
  importSpreadSheet: (link, data) =>
    set((state) => {
      if (state.type === Step.ImportSpreadSheet && !state.sheet.imported) {
        const newState: Partial<SpreadSheetImportedState> = {
          type: Step.ImportSpreadSheet,
          sheet: {
            imported: true,
            link,
            data,
          },
        };

        return newState;
      }
      return state;
    }),
  selectNewSpreadSheet: () =>
    set((state) => {
      if (state.type === Step.ImportSpreadSheet && state.sheet.imported) {
        return {
          sheet: {
            imported: false,
          },
        };
      }

      return state;
    }),
  canContinue: () => {
    const state = get();

    switch (state.type) {
      case Step.ImportSpreadSheet: {
        return state.sheet.imported;
      }
      default:
        return false;
    }
  },
  next: () => {},
  back: () => {},
}));

// importSpreadSheet: (googleSheetLink, sheet) =>
//     set((state) => {
//       if (state.type === Step.ImportSpreadSheet && !state.sheet.imported) {
//         const { sheetImported, ...rest } = state;

//         return {

//         } as SpreadSheetImportedState;
//       }
//       return state;
//     }),
//   selectNewSpreadSheet: () =>
//     set((state) => {
//       if (state.type === Step.ImportSpreadSheet && state.sheetImported) {
//         const { sheet, googleSheetLink, ...rest } = state;

//         return {
//           ...rest,
//           type: Step.ImportSpreadSheet,
//           sheetImported: false,
//         };
//       }

//       return state;
//     }),
//   canContinue: () => {
//     const state = get();

//     switch (state.type) {
//       case Step.ImportSpreadSheet: {
//         return state.sheetImported;
//       }
//       default:
//         return false;
//     return false
//     }
//   },
//   next: () =>
//     set((state) => {
//       if (state.type === Step.ImportSpreadSheet) {
//         if (state.canContinue()) {
//           const { type, ...rest } = state as SpreadSheetImportedState;

//           return {
//             ...rest,
//             type: Step.PreviewSpreadSheet,
//           } as PreviewSpreadSheetState;
//         }

//         return state;
//       }

//       return state;
//     }),
//   back: () =>
//     set((state) => {
//       switch (state.type) {
//         case Step.PreviewSpreadSheet:
//           return {
//             ...state,
//             type: Step.ImportSpreadSheet,
//           } as SpreadSheetImportedState;
//       }

//       return state;
//     }),
