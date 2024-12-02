import { create } from "zustand";

export const useTextColorStore = create((set) => ({
  value: "primary",
  setValue: (updatedTextColor) => set({ value: updatedTextColor }),
}));
