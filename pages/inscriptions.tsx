import { Navbar } from "../components/Navbar";
import Image from 'next/image';
import styles from '../styles/pages/Inscriptions.module.css';

import bodyImage1 from '../assets/bodyImage1.png'
import bodyImage2 from '../assets/bodyImage2.png'
import mapaCT13 from '../assets/mapaCT13.png';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ImageBanner from "../components/ImageBanner";
import ScrollUpButton from "../components/ScrollUpButton";

export default function Inscriptions() {
  return (
    <div>
      <Navbar fromParentSelected={2} />
      
      <Image 
        className={styles.bodyImageContainer}
        src={bodyImage1}
        alt='Primeira imagem de corpo do site'
      />

      <Header text="INSCRIÇÃO" />

      <ScrollUpButton />

      <div className={styles.mainContainer}>
        <div className={styles.mainInformationContainer}>
          <div className={styles.mainText}>
            <p>
              Para os estudantes da UFES Goiabeiras, o cadastro na competição será realizado <span>ÚNICA</span> E <span>EXCLUSIVAMENTE</span> de maneira presencial, com pelo menos um dos participantes da equipe na sala do PET Engenharia de Computação.<br></br><br></br>

              As inscrições vão do período de <span>14/04/23 até 05/05/2023.</span> Os horários disponíveis de atendimento no PET são os seguintes:<br></br><br></br>

              <span>Seg à Sex, de 14:00 às 18:00</span><br></br><br></br>

              <strong>OBS:</strong> A organização do Topcom 20 explicita que o evento, por possuir natureza gratuita, oferece por meio de uma <span>taxa opcional</span> de R$25,00 por competidor, a aquisição de uma <span>camisa</span> estilizada da competição, com intuito de oferecer uma experiência <span>memorável e única.</span> O PET Eng Comp não recebe absolutamente nenhum retorno financeiro e reiteramos que tudo foi feito com muito zelo. A equipe espera que os participantes possam adquirir as camisas para guardar uma lembrança do evento.
              <br></br><br></br>
              
              O pagamento da taxa é realizado de forma <span>integral</span> e no momento do cadastro da equipe (PIX, ou em espécie). 
            </p>
          </div>

          <div className={styles.prices}>
            <div className={styles.priceBox}>
              <p>R$ 25,00</p>
              <span>(por competidor)</span>
            </div>
          </div>

          <div className={styles.localization}>
            <div className={styles.map}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935.6606892372859!2d-40.30667627080492!3d-20.273645499150764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb8194c7bd39a3f%3A0x7d7dfca0a8c05acc!2sCentro%20Tecnol%C3%B3gico%2013%20-%20PPGI!5e0!3m2!1spt-BR!2sbr!4v1669160039004!5m2!1spt-BR!2sbr" width="400" height="330" loading="lazy"></iframe></div>
            <div className={styles.mapDescription}>
              <p>CENTRO TECNOLÓGICO 13 - SEGUNDO ANDAR - SALA 18 - PET ENGENHARIA DA COMPUTAÇÃO</p>
            </div>
          </div>
        </div>


        <div className={styles.saoMatheusInfo}>
          <p><span>INFORME AOS ESTUDANTES DA UFES SÃO MATEUS, UFES ALEGRE E OUTRAS UNIVERSIDADES</span></p><br />

          <p>
            Para realizar a inscrição das equipes de fora da UFES Goiabeiras, o contato deve ser feito pelo formulário da seção de CONTATO da página principal.<br></br>

            É necessário preencher o formulário com as informações indicadas a seguir:<br></br><br></br>
            <span>Assunto:</span> “[NOME DA EQUIPE] Cadastro [UNIVERSIDADE]”<br />
            <span>Mensagem:</span> Nome completo dos participantes; email dos participantes; tamanho da camisa dos participantes; nome, email e tamanho da camisa do coach (se tiver); nome da universidade; cidade da universidade; nome de um desenho animado preferido da equipe; e qualquer outra informação que a equipe achar relevante repassar para a organização<br /><br />


            A taxa de inscrição se mantém a mesma. Responderemos o email com as instruções para pagamento da taxa de inscrição.<br></br>
          </p><br />

          <p>~ Equipe organizadora do TOPCOM20</p>
        </div>

      </div>

      <ImageBanner variant={1}/>

      <Footer />

    </div>
  )
}