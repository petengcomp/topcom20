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
import ScrollUpButton from '../components/ScrollUpButton';

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
        {/* <Image 
          src={HEADER}
          alt='Looney tunes banner topcom 20'
          layout='responsive'/> */}
      </div>


      <Header text="03 DE JUNHO DE 2023" />

      <ImageBanner variant={2}/>

      <ScrollUpButton />

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
            Faça seu cadastro e treine para a competição. Para mais informações, <a href="http://boca.pet.inf.ufes.br/boca/" target="_blank">clique aqui.</a></p>}
          icon={<FiCoffee/>}
        />

        <InfoCard
          title="Regras"
          text={<p>A competição segue os moldes da Maratona de Programação da SBC! É necessário que todos os participantes leiam o <a href="./regulamento.pdf" target="_blank">regulamento</a>. Nele consta informações sobre o ambiente computacional, assim como as liguagens aceitas e suas versões!. 
          <br/><br/>
          Para mais informações, <a href="./instrucoes.pdf" target="_blank">clique aqui.</a></p>}
          icon={<FiBook />}
        />

        <InfoCard 
          title="Premiação"
          text={<p>Para incentivar as equipes, a organização do Topcom oferecerá a inscrição para a fase regional da Maratona de Programação às três equipes melhores classificadas da competição. Caso não ocorra a fase regional da Maratona, a premiação será algum periférico de mesmo valor da inscrição da maratona.
          <br/><br/>
          Para mais detalhes sobre a premiação, visite o <a href="./regulamento.pdf" target="_blank">regulamento.</a></p>}
          icon={<FiGift />}
        />
        
        <InfoCard
          title="Programação"
          text={
            <section className={styles.scheduleTableContainer}>
              <h3>SÁBADO (03/06)</h3>
              <table>
                <tbody>
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
                </tbody>
              </table>
            </section>
          }
          icon={<FiClock/>}
        />
        
        <InfoCard 
          title="PET"
          text={<p>O PET Engenharia de Computação realiza o TOPCOM há 25 anos. Além disso, realizamos diversas outras atividades de pesquisa, ensino e extensão. 
          <br/><br/>
          Conheça mais um pouco do nosso trabalho pelo link <a href="http://pet.inf.ufes.br" target="_blank">http://pet.inf.ufes.br</a></p>}
          icon={
            <div>
              <Image src={petLogo} alt="pet logo" layout="responsive"/>
            </div>
          }
        />

      </section>

      <ImageBanner variant={1}/>

      <div className={styles.contactFormContainer}>
        <h1>CONTATO</h1>

        <div className={styles.disclaimer}>
          <div className={styles.infoIcon}><FiInfo/></div>
          <p>Esta seção de contato pode ser usada por equipes de universidades externas à UFES Goiabeiras, para realização da inscrição.</p>
        </div>

        <form>
          <div>
            <label>NOME COMPLETO<input type='text' /></label>

            <label>ASSUNTO<input type='text'/></label>

            <label>EMAIL<input type='email'/></label>
          </div>

          <label id={styles.textAreaContainer}>MENSAGEM<textarea /></label>
        </form>
      </div>

      <div className={styles.mapContainer}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1432.609919407377!2d-40.30672575358298!3d-20.273095363306044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa91fe2e972579dc6!2sCT%20IX%20-%20Departamento%20de%20Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1667597583900!5m2!1spt-BR!2sbr" loading="lazy" ></iframe>
      </div>

      <ImageBanner variant={2}/>

      <Footer />

    </div>
  )
}
