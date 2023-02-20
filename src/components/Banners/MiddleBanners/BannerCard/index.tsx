import Image from 'next/image'
import { BannerCardProps } from '../../../../@types/MiddleBanners'
import s from './styles.module.scss'

export default function BannerCard({
  text,
  textOrientation,
  imgUrl,
  link
}: BannerCardProps) {
  return (
    <div title={text} className={s.container}>
      <a href={link}>
        <span className={s[textOrientation]}>{text}</span>
      </a>
      <Image
        alt={`${text}`}
        src={imgUrl}
        quality={100}
        width={575}
        height={280}
        className={s.bannerImg}
      />
    </div>
  )
}
