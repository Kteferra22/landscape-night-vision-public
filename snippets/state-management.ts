/**
 * Application State Architecture
 *
 * Global context used to coordinate the multi-step
 * scene generation workflow across the application.
 *
 * Key responsibilities:
 * - screen navigation
 * - uploaded image state
 * - fixture placement data
 * - lighting configuration
 */

import { createContext, useContext } from "react";

export type Screen =
  | "landing"
  | "upload"
  | "fixture-selection"
  | "night-generating"
  | "result";

export interface PlacedFixture {
  id: string;
  imageUrl: string;
  x: number;
  y: number;
  rotationX: number;
  scale: number;
}

interface AppFlowContextType {
  currentScreen: Screen;
  uploadedImage: string | null;
  fixtures: PlacedFixture[];
}

export const AppFlowContext =
  createContext<AppFlowContextType | null>(null);

export function useAppFlow() {
  const context = useContext(AppFlowContext);

  if (!context) {
    throw new Error("useAppFlow must be used within provider");
  }

  return context;
}
