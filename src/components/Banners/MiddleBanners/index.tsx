import { middleBannersData } from '@/resources/banners'
import BannerCard from './BannerCard'
import s from './styles.module.scss'

import { MiddleBannersProps } from '@/@types/MiddleBanners'

export default function MiddleBanners({ banners }: MiddleBannersProps) {
  return (
    <section className={s.section}>
      <div className={`container ${s.wrapper}`}>
        {banners.map(banner => {
          return <BannerCard key={banner.text} {...banner} />
        })}
      </div>
    </section>
  )
}
