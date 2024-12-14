import { create } from "zustand";

export const useTextStore = create((set) => ({
  TextboxText: "",
  setTextboxText: (updatedText) => set({ TextboxText: updatedText }),
}));
