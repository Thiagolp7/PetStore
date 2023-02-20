import { ProductShowcaseProps } from '@/@types/product'
import Product from '../Product'
import s from './styles.module.scss'

export default function ProductShowcase({
  title,
  products
}: ProductShowcaseProps) {
  return (
    <section className={s.section}>
      <div className={`container ${s.showCase}`}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.productWrapper}>
          {products.map(product => {
            return <Product key={product.name} {...product} />
          })}
        </div>
      </div>
    </section>
  )
}
