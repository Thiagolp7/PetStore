import Image from 'next/image'
import { ProductProps } from '@/@types/product'
import { formattPrice } from '@/utils/formattPrice'
import s from './styles.module.scss'

export default function Product({
  name,
  url,
  imgUrl,
  discount,
  listPrice,
  installment,
  isNew = false
}: ProductProps) {
  const sellingPrice = listPrice - (listPrice * discount) / 100
  const formattedListPrice = formattPrice(listPrice)
  const formattedSellingPrice = formattPrice(sellingPrice)
  const formattedMonthPrice = formattPrice(sellingPrice / installment)

  return (
    <div className={s.productCard}>
      <div className={s.imageContainer}>
        {!!discount && (
          <span className={s.discountBadge}>{`${discount}% off`}</span>
        )}

        {isNew && <span className={s.isNewBadge}>Novo</span>}

        <Image
          alt={`Imagem de ${name}`}
          src={imgUrl}
          width={280}
          height={280}
          quality={100}
          className={s.logoImg}
        />

        <div className={s.overlay}>
          <button type="button">Compra Rápida</button>
        </div>
      </div>
      <div className={s.productDesc}>
        <h3 className={s.productName}>{name}</h3>
        <div className={s.productPrices}>
          {!!discount && <p className={s.listPrice}>{formattedListPrice}</p>}

          <p className={s.sellingPrice}>{formattedSellingPrice}</p>
        </div>
        {!!installment && (
          <p
            className={s.productInstallments}
          >{`${installment}x de R$ ${formattedMonthPrice}`}</p>
        )}
      </div>
    </div>
  )
}
