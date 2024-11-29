import { create } from "zustand";

export const useTextSizeStore = create((set) => ({
  value: 16,
  setValue: (updatedTextSize) => set({ value: updatedTextSize }),
}));
