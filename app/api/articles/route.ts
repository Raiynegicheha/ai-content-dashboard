import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, title: "How AI is changing SEO", status: "Published" },
    { id: 2, title: "Next.js vs React", status: "Draft" },
    { id: 3, title: "Performance Optimization Tips", status: "Published" },
  ]);
}
