import Button from '../Button'
import Logo from '../Logo'
import SearchBar from '../Searchbar'
import NavBar from './NavBar'
import MenuBurguer from './NavBar/MenuBurguer'
import s from './styles.module.scss'

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <MenuBurguer mobile />
        <SearchBar />
        <Logo />
        <div className={s.controls}>
          <Button
            menuItems={['Entrar com email e senha', 'Receber código por email']}
            icon="login"
          />
          <Button icon="cart" highLight="99" />
        </div>
      </div>
      <NavBar />
    </header>
  )
}
