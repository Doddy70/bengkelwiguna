import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import path from 'path';

// Simple email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Get subscribers file path
function getSubscribersPath(): string {
  return path.join(process.cwd(), 'data', 'subscribers.json');
}

// Read subscribers
async function getSubscribers(): Promise<{ email: string; subscribedAt: string; ip?: string }[]> {
  try {
    const filePath = getSubscribersPath();
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Save subscribers
async function saveSubscribers(subscribers: { email: string; subscribedAt: string; ip?: string }[]): Promise<void> {
  const dir = path.join(process.cwd(), 'data');
  await mkdir(dir, { recursive: true });
  const filePath = getSubscribersPath();
  await writeFile(filePath, JSON.stringify(subscribers, null, 2), 'utf-8');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Email diperlukan' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json(
        { success: false, message: 'Format email tidak valid' },
        { status: 400 }
      );
    }

    // Get IP for reference (optional)
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Read existing subscribers
    const subscribers = await getSubscribers();

    // Check if already subscribed
    const exists = subscribers.some(s => s.email === normalizedEmail);
    if (exists) {
      return NextResponse.json(
        { success: false, message: 'Email sudah terdaftar' },
        { status: 409 }
      );
    }

    // Add new subscriber
    const newSubscriber = {
      email: normalizedEmail,
      subscribedAt: new Date().toISOString(),
      ip: ip
    };

    subscribers.push(newSubscriber);
    await saveSubscribers(subscribers);

    return NextResponse.json({
      success: true,
      message: 'Berhasil subscribed! Terima kasih telah mendaftar.'
    });

  } catch (error) {
    console.error('Newsletter subscribe error:', error);
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}

// GET endpoint to check subscriber count (optional, admin only)
export async function GET() {
  try {
    const subscribers = await getSubscribers();
    return NextResponse.json({
      success: true,
      count: subscribers.length
    });
  } catch {
    return NextResponse.json({
      success: true,
      count: 0
    });
  }
}
