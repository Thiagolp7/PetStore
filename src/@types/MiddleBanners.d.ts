export interface BannerCardProps {
  text: string
  textOrientation: 'left' | 'right'
  imgUrl: string
  link: string
}

export interface MiddleBannersProps {
  banners: BannerCardProps[]
}
