import NavBarItem from './MenuItem'
import { categories } from '@/resources/navbar'
import s from './styles.module.scss'
import MenuBurguer from './MenuBurguer'

export default function NavBar() {
  return (
    <section className={s.navContainer}>
      <div className={`container`}>
        <div className={`${s.wrapper}`}>
          {categories.map(category => {
            return <NavBarItem key={category.text} {...category} />
          })}
          <MenuBurguer />
        </div>
      </div>
    </section>
  )
}
