import s from './styles.module.scss'

interface NavBarItemProps {
  text: string
  link: string
}

export default function NavBarItem({ text, link }: NavBarItemProps) {
  return (
    <div className={s.container}>
      <a href={link}>{text}</a>
    </div>
  )
}
