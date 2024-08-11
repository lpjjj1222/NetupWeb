import { NextResponse } from 'next/server';

export async function POST(request) {
    const formData = await request.formData();
    const blobData = formData.get('blobData');

    // 将 Blob 转换为 ArrayBuffer
    const arrayBuffer = await blobData.arrayBuffer();

    // 将 ArrayBuffer 转换为 Buffer
    const buffer = Buffer.from(arrayBuffer);

    // 将 Buffer 转换为 Base64 字符串
    const base64String = buffer.toString('base64');

    return NextResponse.json({ base64: base64String });
}
