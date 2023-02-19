import SearchBar from '../Searchbar'
import s from './styles.module.scss'

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <SearchBar />
      </div>
    </header>
  )
}
