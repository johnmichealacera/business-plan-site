import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');

  // Log the form data (placeholder for real handling)
  console.log('Contact form submission:', { name, email, message });

  return NextResponse.json({ success: true });
} 