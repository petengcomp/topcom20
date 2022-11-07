import Head from 'next/head'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import styles from '../styles/pages/Index.module.css'

import HEADER from '../assets/header.png'
import { Header } from '../components/Header';
import ImageBanner from '../components/ImageBanner';
import { Footer } from '../components/Footer';

export default function Home() {

  // const [emojiTitle, setEmojiTitle] = useState<string>('👨‍💻');

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (emojiTitle === '👨‍💻') setEmojiTitle('🎈')
  //     else if (emojiTitle === '🎈') setEmojiTitle('👩‍💻')
  //     else setEmojiTitle('👨‍💻')
  //   }, 1000)

  //   return () => clearInterval(interval)

  // }, [emojiTitle])



  return (


    <div className={styles.mainContainer}>
      <Head>
        {/* <title>TOPCOM20・{emojiTitle}・Torneio de Programação de Computadores・2022</title> */}
        <title>TOPCOM20・Torneio de Programação de Computadores・2022</title>
        <meta name="description" content="Author: PET EngComp, Torneio de Programação de Computadores" />
        <meta content="TOPCOM 20" property="og:title"></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar fromParentSelected={1} />

      
      <div className={styles.headerContainer}>
        <Image 
          src={HEADER}
          alt='Header'
          fill/>
      </div>


      <section className={styles.cardsContainer}>

        <Header text="09 DE JUNHO DE 2023" />

        cards aqui


      </section>

      <ImageBanner variant={1}/>

      <Footer />

    </div>
  )
}
