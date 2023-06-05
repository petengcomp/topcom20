import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from "../components/Navbar";
import { PodiumMember } from "../components/PodiumMember";
import { Header } from "../components/Header";
import styles from "../styles/pages/Results.module.css";
import bodyImage1 from '../assets/bodyImage1.png';
import ImageBanner from '../components/ImageBanner';
import { Footer } from '../components/Footer';
import { MarathonBox } from '../components/MarathonBox';

import FirstPlace from '../assets/winner ballons/1-lugar.svg';
import SecondPlace from '../assets/winner ballons/2-lugar.svg';
import ThirdPlace from '../assets/winner ballons/3-lugar.svg';
import { Button } from '../components/Button';
import ScrollUpButton from '../components/ScrollUpButton';


export default function Results() {
  return (
    <div>
        <Navbar fromParentSelected={5} />
        <Image className={styles.bodyImageContainer} src={bodyImage1} alt='Imagem de corpo do site' />

        <Header text='GANHADORES' />

        <ScrollUpButton />

        <div className={styles.podiumContainer}>
            <div className={styles.podium}>
            <PodiumMember teamName='Ganhador X'
            teamParticipants={['Jose Fulano da Silva', 'Maria Ciclana da Penha', 'Josefino Arruda Alves']}
            image={FirstPlace}/>

            <PodiumMember teamName='Ganhador X'
            teamParticipants={['Jose Fulano da Silva', 'Maria Ciclana da Penha', 'Josefino Arruda Alves']}
            image={SecondPlace}/>

            <PodiumMember teamName='Ganhador X'
            teamParticipants={['Jose Fulano da Silva', 'Maria Ciclana da Penha', 'Josefino Arruda Alves']}
            image={ThirdPlace}/>
            </div>

            <a href='/scores/detailed.html' target="_blank"><Button text="PLACAR GERAL"/></a>
        </div>
            

        <ImageBanner variant={2}/>

        <Header text='INSCRIÇÃO MARATONA' />

        <div className={styles.marathonContainer}>
            <MarathonBox university='UFES GOIABEIRAS'
            teams={ 
            <div className={styles.marathonTeams}>
				      <p>EQ. VENCEDORA 1</p>
            	<p>EQ. VENCEDORA 2</p>
            </div>
            }/>
        
            <MarathonBox university='UFES SÃO MATEUS'
            teams={ 
            <div className={styles.marathonTeams}>
				      <p>EQ. SÃO MATEUS</p>
            </div>
            }/>
        
            <MarathonBox university='UFES ALEGRE'
            teams={ 
            <div className={styles.marathonTeams}>
				      <p>EQ. ALEGRE</p>
            </div>
            }/>
        
            <MarathonBox university='EXTERNAS'
            teams={ 
            <div className={styles.marathonTeams}>
				      <p>EQ. EXT.</p>
            </div>
            }/>
        </div>

        <ImageBanner variant={1} />

        <Footer/>
    </div>
  )
}