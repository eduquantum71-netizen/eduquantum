import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const pengajars = await db.pengajar.findMany({
      include: {
        programs: {
          include: {
            program: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(pengajars)
  } catch (error) {
    console.error('Error fetching pengajars:', error)
    return NextResponse.json(
      { error: 'Failed to fetch pengajars' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, photo, qualification, specialization, experience, email, phone } = body

    if (!name || !qualification || !specialization || !experience || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const pengajar = await db.pengajar.create({
      data: {
        name,
        photo: photo || null,
        qualification,
        specialization,
        experience,
        email,
        phone
      }
    })

    return NextResponse.json(pengajar, { status: 201 })
  } catch (error) {
    console.error('Error creating pengajar:', error)
    return NextResponse.json(
      { error: 'Failed to create pengajar' },
      { status: 500 }
    )
  }
}