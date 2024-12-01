import { create } from "zustand";

export const useTextColorStore = create((set) => ({
  value: "black",
  setValue: (updatedTextColor) => set({ value: updatedTextColor }),
}));
