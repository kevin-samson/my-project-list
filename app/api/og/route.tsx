/* eslint-env node */
import { ImageResponse } from '@vercel/og'
import OGSvg from '../../../public/icons/og.svg'

export const config = {
  runtime: 'edge'
}

// Construct the absolute URL for the font file
const fontURL = new URL(
  '/fonts/Inter-SemiBold.otf',
  process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000' // Fallback for local testing
).href;

// Load font data
const interSemiBold = fetch(fontURL).then((res) => res.arrayBuffer())

export async function GET(req) {
  try {
    const inter = await interSemiBold

    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My Projects'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 80,
            backgroundColor: '#030303',
            backgroundImage:
              'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            backgroundPosition: '-30px -10px',
            fontWeight: 600,
            color: 'white'
          }}
        >
          <OGSvg />
          <p
            style={{
              position: 'absolute',
              bottom: 70,
              left: 80,
              margin: 0,
              fontSize: 30,
              letterSpacing: -1
            }}
          >
            A website showcasing and demonstrating the thought process behind the projects I've worked on
          </p>
          <h1
            style={{
              fontSize: 82,
              margin: '0 0 40px -2px',
              lineHeight: 1.1,
              textShadow: '0 2px 30px #000',
              letterSpacing: -4,
              backgroundImage: 'linear-gradient(90deg, #fff 40%, #aaa)',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            {title}
          </h1>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: inter,
            style: 'normal',
            weight: 600
          }
        ]
      }
    )
  } catch (e) {
    console.error('Error generating OG image:', e)
    return new Response('Failed to generate OG image', { status: 500 })
  }
}