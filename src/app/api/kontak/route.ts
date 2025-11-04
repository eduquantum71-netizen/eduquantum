import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const kontakMessages = await db.kontak.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(kontakMessages)
  } catch (error) {
    console.error('Error fetching kontak messages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch kontak messages' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const kontak = await db.kontak.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject,
        message
      }
    })

    return NextResponse.json(kontak, { status: 201 })
  } catch (error) {
    console.error('Error creating kontak message:', error)
    return NextResponse.json(
      { error: 'Failed to create kontak message' },
      { status: 500 }
    )
  }
}