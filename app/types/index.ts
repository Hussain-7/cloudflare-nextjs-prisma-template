export interface Brainlift {
  id: string
  purpose: string
  dok4: string
  dok3: string
  experts: string
  owners: string
}

export interface BrainliftApiResponse {
  brainlifts: Brainlift[]
  timeTaken: string
  size: string
}

export interface ApiErrorResponse {
  error: string
}

// Test utilities
export interface MockBrainlift extends Brainlift {}