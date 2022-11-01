import Head from 'next/head'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import styles from '../styles/pages/Index.module.css'

import HEADER from '../assets/header.png'

export default function Home() {
  
  const [ emojiTitle, setEmojiTitle ] = useState<string>('👨‍💻');
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      if (emojiTitle==='👨‍💻') setEmojiTitle('🎈')
      else if (emojiTitle==='🎈') setEmojiTitle('👩‍💻')
      else setEmojiTitle('👨‍💻')
    }, 1000)

    return () => clearInterval(interval)  

  },[emojiTitle])

  

  return (

    
    <div className={styles.mainContainer}>
      <Head>
        <title>TOPCOM20・{emojiTitle}・Torneio de Programação de Computadores・2022</title>
        <meta name="description" content="Author: PET EngComp, Torneio de Programação de Computadores" />
        <meta content="TOPCOM 20" property="og:title"></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar fromParentSelected={1}/>

      <Image className={styles.headerContainer} src={HEADER} alt='Header' />


      <section className={styles.cardsContainer}>
        
      </section>
    </div>
  )
}
