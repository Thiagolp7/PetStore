import Image from 'next/image'
import LogoPng from '@/../public/images/logo.png'

export default function Logo() {
  return (
    <div>
      <Image
        alt="PetStore logo"
        src={LogoPng}
        placeholder="blur"
        quality={100}
      />
    </div>
  )
}
