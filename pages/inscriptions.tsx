import { Navbar } from "../components/Navbar";
import Image from 'next/image';
import styles from '../styles/pages/Inscriptions.module.css';

import bodyImage1 from '../assets/bodyImage1.png'
import bodyImage2 from '../assets/bodyImage2.png'
import mapaCT13 from '../assets/mapaCT13.png';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Inscriptions() {
  return (
    <div>
      <Navbar fromParentSelected={2} />
      
      <Image className={styles.bodyImageContainer} src={bodyImage1} alt='Primeira imagem de corpo do site' />

      <Header text="INSCRIÇÃO" />

      <div className={styles.mainContainer}>
        <div className={styles.mainInformationContainer}>
          <div className={styles.mainText}>
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

          <div className={styles.prices}>
            <div className={styles.priceBox}>
              <p>R$ 90,00</p>
              <p><span>TAXA DE INSCRIÇÃO</span></p>
              <p><span>(por equipe)</span></p>
            </div>
            <div className={styles.priceBox}>
              <p>R$ 30,00</p>
              <p><span>TAXA DE INSCRIÇÃO</span></p>
              <p><span>(por participante)</span></p>
            </div>
          </div>

          <div className={styles.localization}>
            <Image className={styles.CTimage} src={mapaCT13} alt='Mapa da localização do CT-13 na UFES' />
            <p>CENTRO TECNOLÓGICO 13 - SEGUNDO ANDAR - SALA 18 - PET ENGENHARIA DA COMPUTAÇÃO</p>
          </div>
        </div>


        <div className={styles.saoMatheusInfo}>
          <p><span>INFORME AOS PARTICIPANTES DA UFES SÃO MATEUS, UFES ALEGRE E OUTRAS UNIVERSIDADES</span></p><br />

          <p>
            Para realizar a inscrição das equipes de fora da UFES Goiabeiras, o contato deve ser feito pelo formulário da seção de CONTATO da página principal.<br></br>

            É necessário preencher o formulário com as informações indicadas a seguir:<br></br><br></br>
            <span>Nome completo:</span> Nome de um dos participantes<br />
            <span>Email:</span> Email válido de um dos participantes<br />
            <span>Assunto:</span> “[NOME DA EQUIPE] Cadastro [UNIVERSIDADE]”<br />
            <span>Mensagem:</span> Nome completo dos participantes; coach se necessário; nome da universidade; cidade da universidade; nome de um desenho animado preferido da equipe; e qualquer outra informação que a equipe achar relevante repassar para a organizaçã<br /><br />


            A taxa de inscrição se mantém a mesma. Nós responderemos o email com uma chave PIX única, para que a equipe, integralmente, realize o pagamento da taxa indicada.
          </p><br />

          <p>~ Equipe organizadora do TOPCOM20</p>
        </div>

      </div>

      <Image className={styles.bodyImageContainer} src={bodyImage2} alt='Segunda imagem de corpo do site' />

      <Footer />

    </div>
  )
}