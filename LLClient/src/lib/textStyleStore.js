import { create } from "zustand";

export const useTextStyleStore = create((set) => ({
  fontSize: 16,
  textColor: "primary",
  fontFamily: "",
  textAlignment: "",
  lineHeight: 1.3,

  setTextAlignment: (alignment) => set({ textAlignment: alignment }),
  setFontSize: (size) => set({ fontSize: size }),
  setTextColor: (color) => set({ textColor: color }),
  setFontFamily: (font) => set({ fontFamily: font }),
  setLineHeight: (height) => set({ lineHeight: height }),
}));
