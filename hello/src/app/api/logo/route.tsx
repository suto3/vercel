import React from "react";

function MySvg() {
  return (
    <svg version="1.1"
        baseProfile="full"
        width="200" height="200"
        xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="darkblue" />
      <circle cx="100" cy="100" r="80" fill="gray" />
      <text x="100" y="125" font-size="50" text-anchor="middle" fill="darkblue">suto3</text>
    </svg>
  )
}

export async function GET() {
  const ReactDOMServer = (await import('react-dom/server')).default
  const body = ReactDOMServer.renderToStaticMarkup(<MySvg />);

  return new Response(
    body, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}