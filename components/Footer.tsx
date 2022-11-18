import Image from 'next/image';
import { BsTelephone, BsInstagram } from 'react-icons/bs'
import { HiOutlineMailOpen } from 'react-icons/hi';

import styles from '../styles/components/Footer.module.css';
import logoPET from '../assets/general logos/logoPET.png';
import logoUfes from '../assets/general logos/logoUfes.png';
import logoLAR from '../assets/general logos/logoLAR.png';
import mascot from '../assets/topcom logos/baloonWhiteBackground.svg'

export function Footer(){

  return (
    <div className={styles.footer}>
        <div className={styles.sponsorContainer}>
          <h2>PATROCINADORES</h2>

          <div className={styles.sponsorLogosContainer}>
            <div className={styles.sponsorImg}>
              <Image 
                src={logoPET}
                layout="responsive"
                alt="Logo do patrocinador" />
            </div>

            <div className={styles.sponsorImg}>
              <Image 
                src={logoPET}
                layout="responsive"
                alt="Logo do patrocinador" />
            </div>

            <div className={styles.sponsorImg}>
              <Image 
                src={logoPET}
                layout="responsive"
                alt="Logo do patrocinador" />
            </div>
          </div>
        </div>
        
        <div className={styles.organization}>
            <h2>REALIZAÇÃO</h2>
            <div className={styles.logos}>
                <div className={styles.organizationImage}>
                  <a href="https://pet.inf.ufes.br" target="_blank">
                    <Image className={styles.logo} src={logoPET} alt="Logo do PET Eng Comp" />
                  </a>
                </div>
                <div className={styles.organizationImage}>
                  <a href="https://ufes.br" target="_blank">
                  <Image className={styles.logo} src={logoUfes} alt="Logo da ufes" />
                  </a>
                </div>
                <div className={styles.organizationImage}>
                  <a href="https://lar.inf.ufes.br" target="_blank">
                  <Image className={styles.logo} src={logoLAR} alt="Logo do LAR" />
                  </a>
                </div>
            </div>
        </div>


        <footer className={styles.bottomFooter}>

          <div className={styles.mascotContainer}>
            <Image 
              className={styles.mascot}
              src={mascot} 
              alt="Mascote do Topcom 20"/>
          </div>
            
          <div className={styles.anotations}>
            <div className={styles.contact}>
              <div>
                <h3>TELEFONES</h3>
                <div className={styles.contactInfo}>
                  <BsTelephone />
                  <p>(27) 3335-2139</p>
                </div>
                <div className={styles.contactInfo}>
                  <BsTelephone />
                  <p>(27) 4009-2139</p>
                </div>
              </div>
              <div>
                <h3>FALE CONOSCO</h3>
                <div className={styles.contactIcons}>
                  <a href="mailto:petengcomp@inf.ufes.br" target="_blank"><HiOutlineMailOpen /></a>
                  <a href="https://www.instagram.com/petengcomp/" target="_blank"><BsInstagram /></a>
                </div>
              </div>
            </div>
            <p>Created by PET Engenharia da Computação - 2023 - All rights reserved</p>
          </div>
            
        </footer>


    </div>
  )
}