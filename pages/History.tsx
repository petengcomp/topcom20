import { Navbar } from "../components/Navbar";
import Image from 'next/image';
import bodyImage1 from '../assets/bodyImage1.png'
import styles from '../styles/pages/History.module.css';
import { Header } from "../components/Header";
import { TopcomHistoryBox } from "../components/TopcomHistoryBox";
import topcom1Balloon from '../assets/topcom1Balloon.svg'

export default function History(){
  return (
    <div>
      <Navbar fromParentSelected={4} />
      
      <Image className={styles.bodyImageContainer} src={bodyImage1} alt='Imagem de corpo do site' />
      
      <Header text="NOSSA HISTÓRIA" />
      
      <div className={styles.contentColumn}>
        <div className={styles.contentRow}>
          <TopcomHistoryBox title="Topcom 1 e Topcom 2"
                              ano={[1997, 1999]} 
                              description="Participaram 10 equipes formadas por alunos dos cursos de Engenharia e/ou Ciências da Computação. 
                              As linguagens de programação permitidas eram C, Pascal e Modula-2. 
                              A premiação aos vencedores foi o acesso grátis (porém limitado) à internet para cada integrante da equipe vencedora."
                              balloonPosition="right"
                              />
          <div className={styles.lineBox}>
            <div className={styles.line}/>
            <Image src={topcom1Balloon} alt={"Balão do Topcom1"} />
          </div>
          <div className={styles.fillDiv}/>
        </div>

        <div className={styles.contentRow}>
          <div className={styles.fillDiv}/>
          <div className={styles.lineBox}>
            <div className={styles.line}/>
            <Image src={topcom1Balloon} alt={"Balão do Topcom1"} />
          </div>
          <TopcomHistoryBox title="Topcom 1 e Topcom 2"
                              ano={[1997, 1999]} 
                              description="Participaram 10 equipes formadas por alunos dos cursos de Engenharia e/ou Ciências da Computação. 
                              As linguagens de programação permitidas eram C, Pascal e Modula-2. 
                              A premiação aos vencedores foi o acesso grátis (porém limitado) à internet para cada integrante da equipe vencedora."
                              balloonPosition="left"
                              />
        </div>

        <div className={styles.contentRow}>
          <TopcomHistoryBox title="Topcom 1 e Topcom 2"
                              ano={[1997, 1999]} 
                              description="Participaram 10 equipes formadas por alunos dos cursos de Engenharia e/ou Ciências da Computação. 
                              As linguagens de programação permitidas eram C, Pascal e Modula-2. 
                              A premiação aos vencedores foi o acesso grátis (porém limitado) à internet para cada integrante da equipe vencedora."
                              balloonPosition="right"
                              />
          <div className={styles.lineBox}>
            <div className={styles.line}/>
            <Image src={topcom1Balloon} alt={"Balão do Topcom1"} />
          </div>
          <div className={styles.fillDiv}/>
        </div>

        <div className={styles.contentRow}>
          <div className={styles.fillDiv}/>
          <div className={styles.lineBox}>
            <div className={styles.line}/>
            <Image src={topcom1Balloon} alt={"Balão do Topcom1"} />
          </div>
          <TopcomHistoryBox title="Topcom 1 e Topcom 2"
                              ano={[1997, 1999]} 
                              description="Participaram 10 equipes formadas por alunos dos cursos de Engenharia e/ou Ciências da Computação. 
                              As linguagens de programação permitidas eram C, Pascal e Modula-2. 
                              A premiação aos vencedores foi o acesso grátis (porém limitado) à internet para cada integrante da equipe vencedora."
                              balloonPosition="left"
                              />
        </div>
      </div>
    </div>
  )
}