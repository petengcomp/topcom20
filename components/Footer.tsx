import Image from 'next/image';

import styles from '../styles/components/Footer.module.css';
import logoPET from '../assets/logoPET.png';
import logoUfes from '../assets/logoUfes.png';
import logoLAR from '../assets/logoLAR.png';
import topquinho from '../assets/topquinho.png';

interface FooterProps {

}

export function Footer({}:FooterProps){

  return (
    <div className={styles.footer}>
        <div className={styles.patrocinadores}>
          <h2>PATROCINADORES</h2>
          {/* logos patrocinadores */}
        </div>
        
        <div className={styles.organization}>
            <h2>REALIZAÇÃO</h2>
            <div className={styles.logos}>
                <Image className={styles.logo} src={logoPET} alt="Logo do PET Eng Comp" />
                <Image className={styles.logo} src={logoUfes} alt="Logo da ufes" />
                <Image className={styles.logo} src={logoLAR} alt="Logo do LAR" />
            </div>
        </div>


        <footer className={styles.bottomFooter}>

          <Image className={styles.topqui} src={topquinho} alt="Mascote do Topcom 20 gigante" />
            
          <div className={styles.anotations}>
            <div className={styles.contact}>
              <div>
                <h3>TELEFONES</h3>
                {/* phone incon */}
                <p>(27) 3335-2139</p>
                {/* phone incon */}
                <p>(27) 4009-2139</p>
              </div>
              <div>
                <h3>FALE CONOSCO</h3>
                {/* mail incon */}
                {/* inst icon */}
              </div>
            </div>
            <p>Created by PET Engenharia da Computação - 2023 - All rights reserved</p>
          </div>
            
        </footer>


    </div>
  )
}