import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const testis = await db.testimoni.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(testis)
  } catch (error) {
    console.error('Error fetching testis:', error)
    return NextResponse.json(
      { error: 'Failed to fetch testis' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, role, content, rating, photo } = body

    if (!name || !role || !content || !rating) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      )
    }

    const testimoni = await db.testimoni.create({
      data: {
        name,
        role,
        content,
        rating: parseInt(rating),
        photo: photo || null
      }
    })

    return NextResponse.json(testimoni, { status: 201 })
  } catch (error) {
    console.error('Error creating testimoni:', error)
    return NextResponse.json(
      { error: 'Failed to create testimoni' },
      { status: 500 }
    )
  }
}