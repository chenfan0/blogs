import { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'
import siteConfig from 'config'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          background: '#fff',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            padding: '0 150px',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
          }}
        >
          <h1 style={{ fontSize: 84, color: '#000' }}>{siteConfig.name}</h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
