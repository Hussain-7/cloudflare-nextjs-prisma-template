import { create } from "zustand"
import { devtools } from "zustand/middleware"
import type { Brainlift, BrainliftApiResponse } from "@/types"

interface BrainliftState {
  brainlifts: Brainlift[]
  loading: boolean
  error: string | null

  // Actions
  setBrainlifts: (brainlifts: Brainlift[]) => void
  addBrainlift: (brainlift: Brainlift) => void
  updateBrainlift: (id: string, updates: Partial<Brainlift>) => void
  removeBrainlift: (id: string) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  fetchBrainlifts: () => Promise<void>
}

export const useBrainliftStore = create<BrainliftState>()(
  devtools(
    (set, get) => ({
      brainlifts: [],
      loading: false,
      error: null,

      setBrainlifts: (brainlifts) => set({ brainlifts }),

      addBrainlift: (brainlift) =>
        set((state) => ({ brainlifts: [...state.brainlifts, brainlift] })),

      updateBrainlift: (id, updates) =>
        set((state) => ({
          brainlifts: state.brainlifts.map((brainlift) =>
            brainlift.id === id ? { ...brainlift, ...updates } : brainlift,
          ),
        })),

      removeBrainlift: (id) =>
        set((state) => ({
          brainlifts: state.brainlifts.filter(
            (brainlift) => brainlift.id !== id,
          ),
        })),

      setLoading: (loading) => set({ loading }),

      setError: (error) => set({ error }),

      fetchBrainlifts: async () => {
        set({ loading: true, error: null })
        try {
          const response = await fetch("/api/brainlifts")
          if (!response.ok) throw new Error("Failed to fetch brainlifts")

          const data = (await response.json()) as BrainliftApiResponse
          set({ brainlifts: data.brainlifts, loading: false })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Unknown error",
            loading: false,
          })
        }
      },
    }),
    { name: "brainlift-store" },
  ),
)
