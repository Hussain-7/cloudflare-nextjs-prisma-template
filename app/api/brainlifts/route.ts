import { NextResponse } from 'next/server'
import prisma from '../../lib/prisma'

export async function GET() {
  try {
    const brainlifts = await prisma.brainlift.findMany()
    return NextResponse.json(brainlifts)
  } catch (error) {
    console.error('Error fetching brainlifts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch brainlifts' },
      { status: 500 }
    )
  }
}