import Image from 'next/image'
import LogoPng from '@/../public/images/logo.png'
import s from './styles.module.scss'

export default function Logo() {
  return (
    <div className={s.logoWrapper}>
      <Image
        alt="PetStore logo"
        src={LogoPng}
        placeholder="blur"
        quality={100}
        className={s.logoImg}
      />
    </div>
  )
}
