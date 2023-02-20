import Image from 'next/image'
import s from './styles.module.scss'
import { CategoryBannerProps } from '@/@types/categoryBanners'

export default function CategoryBanner({
  categoryName,
  imgUrl,
  categorylink
}: CategoryBannerProps) {
  return (
    <div title={categoryName} className={s.categoryBanner}>
      <a href={categorylink}>{categoryName}</a>
      <Image
        alt={`${categoryName} banner`}
        src={imgUrl}
        quality={100}
        width={380}
        height={100}
        className={s.categoryImg}
      />
    </div>
  )
}
