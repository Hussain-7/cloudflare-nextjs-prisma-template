import { describe, it, expect, beforeEach, vi } from "vitest"
import { useBrainliftStore } from "../useBrainliftStore"
import type { Brainlift } from "@/types"

// Mock fetch globally
global.fetch = vi.fn()

const mockBrainlift: Brainlift = {
  id: "1",
  purpose: "Test brainlift",
  dok4: "Test dok4",
  dok3: "Test dok3",
  experts: "Test experts",
  owners: "Test owners",
}

describe("BrainliftStore", () => {
  beforeEach(() => {
    // Reset store state before each test
    useBrainliftStore.setState({
      brainlifts: [],
      loading: false,
      error: null,
    })
    vi.clearAllMocks()
  })

  it("should initialize with default state", () => {
    const state = useBrainliftStore.getState()
    expect(state.brainlifts).toEqual([])
    expect(state.loading).toBe(false)
    expect(state.error).toBe(null)
  })

  it("should set brainlifts", () => {
    const { setBrainlifts } = useBrainliftStore.getState()
    setBrainlifts([mockBrainlift])

    const state = useBrainliftStore.getState()
    expect(state.brainlifts).toEqual([mockBrainlift])
  })

  it("should add a brainlift", () => {
    const { addBrainlift } = useBrainliftStore.getState()
    addBrainlift(mockBrainlift)

    const state = useBrainliftStore.getState()
    expect(state.brainlifts).toHaveLength(1)
    expect(state.brainlifts[0]).toEqual(mockBrainlift)
  })

  it("should update a brainlift", () => {
    const { setBrainlifts, updateBrainlift } = useBrainliftStore.getState()
    setBrainlifts([mockBrainlift])

    updateBrainlift("1", { purpose: "Updated purpose" })

    const state = useBrainliftStore.getState()
    expect(state.brainlifts[0].purpose).toBe("Updated purpose")
  })

  it("should remove a brainlift", () => {
    const { setBrainlifts, removeBrainlift } = useBrainliftStore.getState()
    setBrainlifts([mockBrainlift])

    removeBrainlift("1")

    const state = useBrainliftStore.getState()
    expect(state.brainlifts).toHaveLength(0)
  })

  it("should fetch brainlifts successfully", async () => {
    const mockResponse = {
      brainlifts: [mockBrainlift],
      timeTaken: "0.1s",
      size: "1kb",
    }

    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    } as Response)

    const { fetchBrainlifts } = useBrainliftStore.getState()
    await fetchBrainlifts()

    const state = useBrainliftStore.getState()
    expect(state.brainlifts).toEqual([mockBrainlift])
    expect(state.loading).toBe(false)
    expect(state.error).toBe(null)
  })

  it("should handle fetch error", async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error("Network error"))

    const { fetchBrainlifts } = useBrainliftStore.getState()
    await fetchBrainlifts()

    const state = useBrainliftStore.getState()
    expect(state.error).toBe("Network error")
    expect(state.loading).toBe(false)
  })
})
