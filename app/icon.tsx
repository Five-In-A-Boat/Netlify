import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 100, height: 100 }
export const contentType = 'image/png'

export default function Icon() {
  const iconData = readFileSync(join(process.cwd(), 'app', '_icon_source.png'))
  const base64 = `data:image/png;base64,${iconData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1D3D4B',
          borderRadius: '16px',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={base64} alt="" width={80} height={80} style={{ objectFit: 'contain' }} />
      </div>
    ),
    { ...size }
  )
}
