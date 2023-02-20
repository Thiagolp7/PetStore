import Image from 'next/image'
import BenefitsItem from './BenefitsItem'
import { benefitsData, contactList, socialLinks } from '@/resources/footer'
import serieLogoSvg from '@/../public/images/serie-logo.svg'
import Logo from '../Logo'
import Icon from '../Icon'
import s from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <section className={s.newsletter}>
        <div className={`container ${s.wrapper}`}>
          <div className={s.benefits}>
            {benefitsData.map(item => {
              return <BenefitsItem key={item.textStrong} {...item} />
            })}
          </div>

          <div className={s.newsletterContainer}>
            <h2>Assine nossa newsletter</h2>
            <p>
              Cadastre-se para receber nossas novidades e descontos exclusivos!
            </p>

            <form className={s.newsLetterForm}>
              <label className="sr-only" htmlFor="news-name">
                Nome
              </label>
              <input type="text" id="news-name" placeholder="Nome" />
              <label className="sr-only" htmlFor="news-email">
                E-mail
              </label>
              <input type="text" id="news-email" placeholder="E-mail" />
              <button type="submit" title="Enviar">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className={s.contact}>
        <div className={`container ${s.contactWrapper}`}>
          <div className={s.infos}>
            <Logo />
            <div className={s.socialLinks}>
              {socialLinks.map(item => {
                return (
                  <a key={item.iconName} href={item.link}>
                    <Icon name={item.iconName} />
                  </a>
                )
              })}
            </div>
            <div className={s.address}>
              <p>© 2022 . CNPJ 00.000.000/0000-00</p>
              <p>Rua Tal de Tal, 123 - Cidade, Estado</p>
            </div>
          </div>

          <div className={s.contactsColumns}>
            {contactList.map(list => {
              return (
                <ul key={list.title} className={s.column}>
                  <li className={s.columnTitle}>{list.title}</li>
                  {!!list.links &&
                    list.links.map(link => {
                      return (
                        <li key={link.text} className={s.columnItem}>
                          <a href={link.link}>{link.text}</a>
                        </li>
                      )
                    })}

                  {!!list.items &&
                    list.items.map((item, i) => {
                      return (
                        <li key={item + i} className={s.columnItem}>
                          <p>{item}</p>
                        </li>
                      )
                    })}

                  {!!list.cardImages && (
                    <div className={s.paymentsContainer}>
                      {list.cardImages.map(img => {
                        return (
                          <li key={img}>
                            <Image alt="" src={img} width="44" height="26" />
                          </li>
                        )
                      })}
                    </div>
                  )}
                </ul>
              )
            })}
          </div>
        </div>
        <div className={`container ${s.developedBy}`}>
          <p>tecnologia e desenvolvimento:</p>
          <Image alt="Seri.e logo" src={serieLogoSvg} quality={100} />
        </div>
      </section>
    </footer>
  )
}
