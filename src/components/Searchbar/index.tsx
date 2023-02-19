import React, { useState } from 'react'
import s from './styles.module.scss'
import { BsSearch } from 'react-icons/bs'

export default function SearchBar() {
  const [inputValue, setInputvalue] = useState('')

  function HandleOnChange(e: React.FormEvent<HTMLInputElement>) {
    setInputvalue(e.currentTarget.value)
  }

  return (
    <div className={s.container}>
      <input
        type="text"
        value={inputValue}
        onChange={e => HandleOnChange(e)}
        placeholder="Pesquisar..."
      />
      <button title="Pesquisar">
        <BsSearch />
      </button>
    </div>
  )
}
