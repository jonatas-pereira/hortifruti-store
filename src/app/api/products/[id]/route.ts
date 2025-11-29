import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/db/supabase'

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: `` });
}
