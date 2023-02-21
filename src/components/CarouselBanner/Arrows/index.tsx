import { SlArrowLeft } from 'react-icons/sl'
import { SlArrowRight } from 'react-icons/sl'
import './style.module.scss'
import { ButtonHTMLAttributes } from 'react'

interface ArrowsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeArrow: string
}

export function Arrows({ typeArrow, ...props }: ArrowsProps) {
  const arrowIcon =
    typeArrow === 'prev' ? (
      <SlArrowLeft className="arrowImg" />
    ) : (
      <SlArrowRight className="arrowImg" />
    )

  const classArrow =
    typeArrow === 'prev' ? 'slick-prev arrow' : 'slick-next arrow'

  return (
    <button className={classArrow} {...props}>
      {arrowIcon}
    </button>
  )
}
