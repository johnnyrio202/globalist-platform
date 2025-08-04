import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') || '10')

    const where = {
      published: true,
      ...(category && category !== 'all' ? { category } : {})
    }

    const posts = await prisma.post.findMany({
      where,
      include: {
        author: {
          select: {
            name: true,
          }
        }
      },
      orderBy: { publishedAt: 'desc' },
      take: limit,
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}