import { create } from "zustand";

export const useTextSizeStore = create((set) => ({
  value: 12,    
  setValue: (updatedTextSize) => set({ value: updatedTextSize }),
}));
