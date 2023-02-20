export interface ProductProps {
  name: string
  url: string
  imgUrl: string
  discount: number
  listPrice: number
  installment: number
  isNew?: boolean
}

export interface ProductShowcaseProps {
  title: string
  products: ProductProps[]
}
