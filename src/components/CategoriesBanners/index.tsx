import { CategoriesBannersProps } from '../types/categoryBanners'
import CategoryBanner from './CategoryBanner'
import s from './styles.module.scss'

export default function CategoriesBanners({ banners }: CategoriesBannersProps) {
  return (
    <section className={s.section}>
      <div className={`container ${s.wrapper}`}>
        {banners.map(category => {
          return <CategoryBanner key={category.categoryName} {...category} />
        })}
      </div>
    </section>
  )
}
