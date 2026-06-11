import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, paths, tags } = body;

    // Verify secret
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    if (!paths && !tags) {
      return NextResponse.json(
        { message: 'Missing paths or tags to revalidate' },
        { status: 400 }
      );
    }

    const results = { paths: [] as string[], tags: [] as string[] };

    if (paths && Array.isArray(paths)) {
      for (const path of paths) {
        revalidatePath(path);
        results.paths.push(path);
      }
    }

    if (tags && Array.isArray(tags)) {
      for (const tag of tags) {
        revalidateTag(tag);
        results.tags.push(tag);
      }
    }

    return NextResponse.json({ revalidated: true, now: Date.now(), results });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
