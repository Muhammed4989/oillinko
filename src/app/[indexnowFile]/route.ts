// The ownership key stays in Vercel, outside the public repository.
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const key = process.env.INDEXNOW_KEY;
  if (!key || !/^[a-zA-Z0-9-]{8,128}$/.test(key) || new URL(request.url).pathname !== `/${key}.txt`) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(key, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag": "noindex",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
