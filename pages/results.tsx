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

import runtimeterror from '../assets/winner ballons/runtimeterror.png'
import machineburning from '../assets/winner ballons/machineburning.png'
import trycatchus from '../assets/winner ballons/trycatchus.png'

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
            <PodiumMember teamName='Try Catch Us'
            teamParticipants={['Filipe Gomes Arante de Souza', 'Christian Junji Litzinger State', 'Vinícius Moraes de Jesus']}
            image={SecondPlace}
            logo={trycatchus}/>

            <PodiumMember teamName='Runtime Terror'
            teamParticipants={['Addison Alves Viana', 'João Paulo Souza Ferrete', 'Junior Brandão']}
            image={FirstPlace}
            logo={runtimeterror}/>

            <PodiumMember teamName='Machine Burning'
            teamParticipants={['Pedro Igor Gomes de Morais', 'Marlon Moratti do Amaral', 'Matheus Saick de Martin']}
            image={ThirdPlace}
            logo={machineburning}/>
            </div>

            <a href='/scores/detailed.html' target="_blank" style={{marginTop: "10rem"}}><Button text="PLACAR GERAL"/></a>
        </div>
            

        <ImageBanner variant={2}/>

        <Header text='INSCRIÇÃO MARATONA' />

        <div className={styles.marathonContainer}>
            <MarathonBox university='UFES GOIABEIRAS'
            teams={ 
            <div className={styles.marathonTeams}>
				      <p>Try Catch Us</p>
            	<p>Machine Burning</p>
            </div>
            }/>
        
            <MarathonBox university='UFES SÃO MATEUS'
            teams={ 
            <div className={styles.marathonTeams}>
				      <p>Runtime Terror</p>
            </div>
            }/>
        
        </div>

        <ImageBanner variant={1} />

        <Footer/>
    </div>
  )
}