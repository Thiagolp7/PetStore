import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header/'
import Footer from '@/components/Footer'
import CategoriesBanners from '@/components/Banners/CategoriesBanners'
import { categoriesBannersData, middleBannersData } from '@/resources/banners'
import MiddleBanners from '@/components/Banners/MiddleBanners'
import ProductShowcase from '@/components/ProductShowcase'
import { productNews, productsHightlight } from '@/resources/product'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Seri.e | PET Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className={styles.main}>
        <CategoriesBanners banners={categoriesBannersData} />
        <ProductShowcase title="Novidades" products={productNews} />
        <MiddleBanners banners={middleBannersData} />
        <ProductShowcase title="Destaques" products={productsHightlight} />
      </main>
      <Footer />
    </>
  )
}
