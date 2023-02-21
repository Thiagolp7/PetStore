import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { mainBannerCarousel } from '@/resources/banners'
import { Arrows } from './Arrows'
import s from './styles.module.scss'

export function CarouselBanner() {
  const slickConfigs = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    prevArrow: <Arrows typeArrow="prev" />,
    nextArrow: <Arrows typeArrow="next" />
  }

  return (
    <section className={s.sliderBannerContainer}>
      <Slider {...slickConfigs} className={s.sliderBannerWrapper}>
        {mainBannerCarousel.map((item, index) => {
          return (
            <div key={index} className={s.wrapperImagePet}>
              <img src={item.image} alt="Banner" />
            </div>
          )
        })}
      </Slider>
    </section>
  )
}
