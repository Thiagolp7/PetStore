import { ReactElement, ButtonHTMLAttributes, useState } from 'react'
import Icon from '../Icon'
import s from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  menuItems?: string[]
  icon?: string
  highLight?: string
}

export default function Button({
  children,
  text = '',
  menuItems,
  icon,
  highLight,
  ...props
}: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  function HandleClick() {
    const { onClick } = props

    if (!onClick) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className={s.container}>
      <button className={`${s.button}`} {...props} onClick={HandleClick}>
        {children}
        <Icon name={icon} className={s.icon} />
        {!!highLight && <div className={s.highLight}>{highLight}</div>}
      </button>

      {!!menuItems && (
        <div className={`${s.menu} ${isOpen ? s.isOpen : ''}`}>
          <p>Escolha uma opção para entrar</p>
          <nav>
            <ul>
              {menuItems.map((item, i) => {
                return (
                  <li key={item + i} className={s.item}>
                    {' '}
                    <a href="#" title={item}>
                      {item}
                    </a>{' '}
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
