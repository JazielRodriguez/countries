import Image from 'next/image'
export default function CustomImage (props: { src: string, alt: string }) {
  return (
    <div style={{ position: 'relative', height: '300px', width: '300px' }}>
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
