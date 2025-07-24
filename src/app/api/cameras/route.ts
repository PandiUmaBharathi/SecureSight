import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const cameras = await prisma.camera.findMany({
    orderBy: { id: 'asc' },
  });

  return NextResponse.json(cameras);
}
