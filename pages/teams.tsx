import Image from 'next/image';
import { Navbar } from "../components/Navbar";
import { Team } from "../components/Team"
import { Header } from "../components/Header"
import styles from "../styles/pages/Teams.module.css"
import bodyImage1 from '../assets/bodyImage1.png'
import ImageBanner from '../components/ImageBanner';
import { Footer } from '../components/Footer';

export default function Teams() {
  return (
    <div>
      <Navbar fromParentSelected={6} />
      <Image className={styles.bodyImageContainer} src={bodyImage1} alt='Imagem de corpo do site' />

      <Header text="EQUIPES CONFIRMADAS" />


      <div className={styles.teamsContainer}>
        <Team key={0} index={0} teamName="Manjava" teamParticipants={["Luiz", "Matheus", "Arthur"]} />
        <Team key={1} index={1} teamName="Pythaun" teamParticipants={["João", "Avonso"]} />
        <Team key={2} index={2} teamName="Team Pet" teamParticipants={["Lara", "Kevin"]} />
        <Team key={3} index={3} teamName="Malloc sem free" teamParticipants={["Pedro", "Matheus"]} />
        <Team key={4} index={4} teamName="Javascript" teamParticipants={["João"]} />
        <Team key={5} index={5} teamName="Rust" teamParticipants={["João", "Js", "Milla"]} />
        <Team key={6} index={6} teamName="Rust" teamParticipants={["João", "Js", "Milla"]} />
        <Team key={7} index={7} teamName="Rust" teamParticipants={["João", "Js", "Milla"]} />
        <Team key={8} index={8} teamName="Rust" teamParticipants={["João", "Js", "Milla"]} />
        <Team key={9} index={9} teamName="Rust" teamParticipants={["João", "Js", "Milla"]} />
        <Team key={10} index={10} teamName="Rust" teamParticipants={["João", "Js", "Milla"]} />
        <Team key={11} index={11} teamName="Rust" teamParticipants={["João", "Js", "Milla"]} />
      </div>

      <ImageBanner variant={1} />

      <Footer/>
    </div>
  )
}