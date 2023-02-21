import { useState } from 'react'
import { categories } from '@/resources/navbar'
import s from './styles.module.scss'

interface MenuBurguerProps {
  mobile?: boolean
}

export default function MenuBurguer({ mobile = false }: MenuBurguerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${s.container} ${isOpen && s.open} ${mobile && s.mobile}`}>
      <button
        className={`${s.button} ${isOpen && s.open}`}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={s.menuFloat}>
        <div className={`container ${s.menuWrapper}`}>
          {categories.map(({ text, link }) => {
            return (
              <a key={text} href={link}>
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
