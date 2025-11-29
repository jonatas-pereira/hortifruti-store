import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/db/supabase'

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get('category')
  let result = await supabase.from('products').select('*').eq('category', category).order('name', { ascending: false })
  if (result.error) {
    return NextResponse.json({ error: result.error.message }, { status: 500 })
  }
  const { data } = result
  return NextResponse.json({ message: 'Products retrieved successfully', data }, { status: 200 })
}