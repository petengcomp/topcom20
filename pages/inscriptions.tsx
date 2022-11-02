import { Navbar } from "../components/Navbar";
import Image from 'next/image';
import styles from '../styles/pages/Inscriptions.module.css';

import bodyImage1 from '../assets/bodyImage1.png'
import mapaCT13 from '../assets/mapaCT13.png';
import { Header } from "../components/Header";

export default function Inscriptions() {
  return (
    <div>
      <Navbar fromParentSelected={2} />
      
      <Image className={styles.bodyImageContainer} src={bodyImage1} alt='Imagem de corpo do site' />

      <Header text="INSCRIÇÃO" />

      <div className={styles.mainContainer}>
        <div className={styles.mainInformationContainer}>
          <div>
            <p>
              O cadastro na competição será realizado <span>ÚNICA</span> E <span>EXCLUSIVAMENTE</span> de maneira presencial, com pelo menos um dos participantes da equipe na sala do PET Engenharia de Computaçã.<br></br><br></br>

              Os horários disponíveis de atendimento no PET são os seguintes:<br></br><br></br>

              <span>Seg à Sex, de 14:00 às 18:00</span><br></br><br></br>

              O pagamento da taxa é realizado de forma <span>integral</span> e no momento do cadastro da equipe. <br></br><br></br>

              PAGUE SOMENTE AOS INTEGRANTES OFICIAIS DO PET<br></br><br></br>
              
              Vale lembrar que o dinheiro dos competidores é direcionado para a compra de <span>brindes</span>, parte dos <span>prêmios</span> e outros <span>benefícios</span> para os participantes.<br></br><br></br>
              
              Aceitamos PIX e em espécie.
            </p>
          </div>

          <div>
            <div>
              R$ 90,00
              <span>TAXA DE INSCRIÇÃO</span>
              <span>(por equipe)</span>
            </div>
            <div>
              R$ 30,00
              <span>TAXA DE INSCRIÇÃO</span>
              <span>(por participante)</span>
            </div>
          </div>

          <div>
            <Image className={styles.CTImage} src={mapaCT13} alt='Mapa da localização do CT-13 na UFES' />
            <p>CENTRO TECNOLÓGICO 13 - SEGUNDO ANDAR - SALA 18 - PET ENGENHARIA DA COMPUTAÇÃO</p>
          </div>
        </div>


        <div>
          {/* Informe aos participantes de São Matheus */}
        </div>

      </div>

    </div>
  )
}