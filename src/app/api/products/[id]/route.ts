import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/db/supabase'

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;
  console.log("Fetching product with ID:", id);
  const products = await supabase.from('products').select('*').eq('id', id).single()
  if (products.error) {
    return NextResponse.json({ error: products.error.message }, { status: 500 });
  }
  return NextResponse.json({ message: 'Product retrieved successfully', data: products.data }, { status: 200 });
}
