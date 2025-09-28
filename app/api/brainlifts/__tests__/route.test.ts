import { describe, it, expect, vi, beforeEach } from "vitest"
import { GET } from "../route"
import type {
  BrainliftApiResponse,
  ApiErrorResponse,
  MockBrainlift,
} from "../../../types"

// Mock the prisma import
vi.mock("@/lib/db/prisma", () => ({
  default: {
    brainlift: {
      findMany: vi.fn(),
    },
  },
}))

describe("/api/brainlifts", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should return brainlifts data", async () => {
    const mockBrainlifts: MockBrainlift[] = [
      {
        id: "1",
        purpose: "Test purpose",
        dok4: "Test dok4",
        dok3: "Test dok3",
        experts: "Test experts",
        owners: "Test owners",
      },
    ]

    const prisma = await import("@/lib/db/prisma")
    vi.mocked(prisma.default.brainlift.findMany).mockResolvedValue(
      mockBrainlifts,
    )

    const response = await GET()
    const data = (await response.json()) as BrainliftApiResponse

    expect(response.status).toBe(200)
    expect(data.brainlifts).toEqual(mockBrainlifts)
    expect(data.timeTaken).toBeDefined()
    expect(data.size).toBeDefined()
  })

  it("should handle errors gracefully", async () => {
    const prisma = await import("@/lib/db/prisma")
    vi.mocked(prisma.default.brainlift.findMany).mockRejectedValue(
      new Error("Database error"),
    )

    const response = await GET()
    const data = (await response.json()) as ApiErrorResponse

    expect(response.status).toBe(500)
    expect(data.error).toBe("Failed to fetch brainlifts")
  })
})
