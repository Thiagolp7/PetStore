import Image from 'next/image'
import iconPetPng from '@/../public/icons/icon-pet.png'
import s from './styles.module.scss'

interface BenefitsItemProps {
  text?: string
  textStrong?: string
}

export default function BenefitsItem({ text, textStrong }: BenefitsItemProps) {
  return (
    <div className={s.container}>
      <Image src={iconPetPng} alt="" placeholder="blur" quality={100} />
      <h2>
        {textStrong}
        <span>{text}</span>
      </h2>
    </div>
  )
}
