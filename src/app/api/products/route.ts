import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/db/supabase'

export async function GET(request: NextRequest) {

  const category = request.nextUrl.searchParams.get('category')
  const highlighted = request.nextUrl.searchParams.get('highlighted')
  const offset = request.nextUrl.searchParams.get('offset')
  const limit = request.nextUrl.searchParams.get('limit')

  if(highlighted && category) {
    const result = await supabase.from('products').select('id, name, unitmeasure, price, imgurl').eq('category', category).eq('highlighted', true)
    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 })
    } 
    const { data } = result
    return NextResponse.json({ message: 'Highlighted products retrieved successfully', data }, { status: 200 })
  }

  if(category) {
    const result = await supabase.from('products')
      .select('id, name, unitmeasure, price, imgurl')
      .eq('category', category)
      .range(offset ? parseInt(offset) : 0, limit ? (parseInt(limit) - 1) : 9)
      
    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 })
    }
    const { data } = result
    return NextResponse.json({ message: 'Products retrieved successfully', data }, { status: 200 })
  }

  return NextResponse.json({ error: 'Category is required' }, { status: 400 })
}

export async function POST(request: NextRequest) {
  const { name, unitMeasure, quantity, price, imgUrl, category, highlighted } = await request.json()

  const { data, error } = await supabase.from('products').insert([
    { name, unitmeasure: unitMeasure, quantity, price, imgurl: imgUrl, category, highlighted }
  ])  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ message: 'Product created successfully', product: data }, { status: 201 }) 
}