import { create } from "zustand";

export const useTextStore = create((set) => ({
  value: "",
  setValue: (updatedText) => set({ value: updatedText }),
}));
