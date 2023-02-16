import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import ImageBanner from "../components/ImageBanner";
import { Navbar } from "../components/Navbar";
import ScrollUpButton from "../components/ScrollUpButton";
import { SponsorBox } from "../components/Sponsor/SponsorBox";

import styles from '../styles/pages/Sponsor.module.css'

export default function Sponsor(){
  return (
    <div>
      <Navbar fromParentSelected={8} />

      <ImageBanner variant={2}/>

      <Header text="PATROCINADORES" />
      
      <ScrollUpButton />

      <div className={styles.main_container}>
        <SponsorBox 
          imagePath="./wepipe.png"
          text="COTA MASTER"
          textColor="#A600C1"
        />

        <SponsorBox 
          imagePath="./hack.png"
          text="COTA MASTER"
          textColor="#A600C1"
        />

        <SponsorBox 
          imagePath="./inflor.png"
          text="COTA SENIOR"
          textColor="#FFD800"
        />
      </div>
      
      <ImageBanner variant={1} />

      <Footer />
    </div>
  )
}