import { NextResponse } from "next/server"
import prisma from "../../lib/db/prisma"

export async function GET() {
  try {
    const startTime = Date.now()
    const brainlifts = await prisma.brainlift.findMany()
    const endTime = Date.now()
    const duration = endTime - startTime
    return NextResponse.json({
      timeTaken: `${duration / 1000}s`,
      size: `${brainlifts.length / 1000}kb`,
      brainlifts,
    })
  } catch (error) {
    console.error("Error fetching brainlifts:", error)
    return NextResponse.json(
      { error: "Failed to fetch brainlifts" },
      { status: 500 },
    )
  }
}
