import NavBarItem from './MenuItem'
import { categories } from '@/resources/navbar'
import s from './styles.module.scss'

export default function NavBar() {
  return (
    <section className={s.navContainer}>
      <div className={`container ${s.wrapper}`}>
        {categories.map(category => {
          return <NavBarItem key={category.text} {...category} />
        })}
      </div>
    </section>
  )
}
