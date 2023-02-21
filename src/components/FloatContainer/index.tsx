import { useEffect, useMemo, useState } from 'react'
import Icon from '../Icon'
import s from './styles.module.scss'

function WhastAppButton() {
  return (
    <a className={s.wppContainer} href="#wppLink">
      <Icon name="whatsapp" className={s.icon} />
    </a>
  )
}

function BackToTop() {
  const [isActive, setIsActive] = useState(false)

  function HandleScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  function showButton() {
    if (typeof window !== 'object') return
    document.addEventListener('scroll', () => {
      const page = document.querySelector<HTMLHtmlElement>('body')
      const pageHeight = page?.offsetHeight
      const scrollPosition = document.documentElement.scrollTop
      const target = pageHeight ? pageHeight / 4 : 0
      const active = scrollPosition >= target

      if (active) {
        setIsActive(true)
        return
      }

      if (!active) {
        setIsActive(false)
      }
    })
  }

  useEffect(() => {
    showButton()
  }, [])

  return (
    <button
      className={`${s.backtoTopContainer} ${isActive && s.isActive}`}
      onClick={HandleScrollToTop}
    >
      <Icon name="arrowUp" className={s.icon} />
    </button>
  )
}

export default function FloatContainer() {
  return (
    <div className={s.container}>
      <BackToTop />
      <WhastAppButton />
    </div>
  )
}
