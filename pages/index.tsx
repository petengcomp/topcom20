import Head from 'next/head'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import styles from '../styles/pages/Index.module.css';
import petLogo from '../assets/general logos/petLogo.svg'

import { FiBook, FiClock, FiCoffee, FiGift, FiInfo } from 'react-icons/fi'

import HEADER from '../assets/header.png'
import { Header } from '../components/Header';
import ImageBanner from '../components/ImageBanner';
import { Footer } from '../components/Footer';
import { InfoCard } from '../components/InfoCard';

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


      <Header text="09 DE JUNHO DE 2023" />

      <ImageBanner variant={2}/>

      <section className={styles.cardsContainer}>


        <InfoCard 
          title="Sobre"
          text={<p>O Topcom, <span>Torneio de Programação de Computadores</span>, promovido pelo PET Engenharia de Computação (UFES) proporciona aos estudantes de computação a oportunidade de demonstrar, compartilhar e aprimorar suas habilidades em solucionar problemas usando o computador. O torneio explora o trabalho em equipe sob pressão e estimula a criatividade. 
          Esse projeto visa motivar a participação de instituições locais em competições nacionais universitárias, como a Maratona de Programação. O torneio consiste na resolução e implementação de uma lista de problemas em um intervalo de tempo específico. 
          A elaboração e correção dos problemas contam com a participação de professores do Departartamento de Informática da UFES.</p>}
          icon={<FiInfo/>}
        />

        <InfoCard
          title="Treinamento"
          text={<p>O Torneio de Programação de Computadores utiliza o BOCA (BOCA Online Contest Administrator), que é um sistema/ferramenta de apoio a competições de programação desenvolvido para ser usado na Maratona de Programação da Sociedade Brasileira de Computação. 
          <br/><br/>
          O sistema é usado para que se faça o uso de submissão e correção automatica com finalidadede verificar e validar a consistência de um algoritmo através de vários casos teste. 
          <br/><br/>
          Faça seu cadastro e treine para a competição. Para mais informações, <a href="">clique aqui.</a></p>}
          icon={<FiCoffee/>}
        />

        

        <InfoCard
          title="Regras"
          text={<p>A competição segue os moldes da Maratona de Programação da SBC! É necessário que todos os participantes leiam o <a href="">regulamento</a>. Nele consta informações sobre o ambiente computacional, assim como as liguagens aceitas e suas versões!. 
          <br/><br/>
          Para mais informações, <a href="">clique aqui.</a></p>}
          icon={<FiBook />}
        />

        <InfoCard 
          title="Premiação"
          text={<p>Para incentivar as equipes, a organização do Topcom oferecerá troféus e uma premiação para a equipe vencedora do Espírito Santo: 1 assinatura da Alura para cada um dos 3 integrantes da equipe vencedora.
          <br/><br/>
          Para mais detalhes sobre a premiação, visite o <a href="">regulamento.</a></p>}
          icon={<FiGift />}
        />
        
        <InfoCard
          title="Programação"
          text={
            <div className={styles.scheduleTableContainer}>
              <h3>SÁBADO (XX/XX)</h3>
              <table>
                <tr>
                  <td>09:00 - 10:30</td>
                  <td>ABERTURA</td>
                </tr>
                <tr>
                  <td>10:30 - 12:00</td>
                  <td>AQUECIMENTO (WARM-UP)</td>
                </tr>
                <tr>
                  <td>12:00 - 14:00</td>
                  <td>ALMOÇO</td>
                </tr>
                <tr id={styles.highlight}>
                  <td>14:00 - 19:00</td>
                  <td>COMPETIÇÃO</td>
                </tr>
                <tr>
                  <td>19:00</td>
                  <td>ENCERRAMENTO E PREMIAÇÃO</td>
                </tr>
              </table>
            </div>
          }
          icon={<FiClock/>}
        />
        
        <InfoCard 
          title="PET"
          text={<p>O PET Engenharia de Computação realiza o TOPCOM há 25 anos. Além disso, realizamos diversas outras atividades de pesquisa, ensino e extensão. 
          <br/><br/>
          Conheça mais um pouco do nosso trabalho pelo link <a href="http://pet.inf.ufes.br">http://pet.inf.ufes.br</a></p>}
          icon={
            <div>
              <Image src={petLogo} alt="pet logo" layout="responsive"/>
            </div>
          }
        />

      </section>

      <ImageBanner variant={1}/>

      <Footer />

    </div>
  )
}
