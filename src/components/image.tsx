import Image from 'next/image'
import { type CustomImageProps } from '@/types'
export default function CustomImage (props: CustomImageProps) {
  return (
    <div style={{ position: 'relative', height: props.height, width: props.width }}>
      <Image
        src={props.src}
        alt={`Flag of ${props.alt}`}
        fill
        quality={100}
        style={{
          objectFit: 'contain'
        }}
      />
    </div>
  )
}
