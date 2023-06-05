import Image from 'next/image';
import { Navbar } from "../components/Navbar";
import { Team } from "../components/Team"
import { Header } from "../components/Header"
import styles from "../styles/pages/Teams.module.css"
import bodyImage1 from '../assets/bodyImage1.png'
import ImageBanner from '../components/ImageBanner';
import { Footer } from '../components/Footer';
import ScrollUpButton from '../components/ScrollUpButton';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { TeamType } from '../types/team';

let teams = [
  {
      "name": ":DROP TABLE *",
      "cartoon": "BEN 10",
      "competitors": [
          "Mateus Ticianeli Sartorio",
          "Yuri Aikau de Castro Reis Sanchez",
          "David Cristian Motta Propato"
      ]
  },
  {
      "name": "Topicanha",
      "cartoon": "Thundercats",
      "competitors": [
          "Pedro Campagnoli de Casto",
          "Jheam Storch Ross",
          "Misael Florenciano Gomes"
      ]
  },
  {
      "name": "Casimitos",
      "cartoon": "Drama Total",
      "competitors": [
          "Pedro Sodré Malini",
          "João Pedro Pereira Loss",
          "Victor Augusto Fernandes Rangel"
      ]
  },
  {
      "name": "try catch us",
      "cartoon": "Kick Buttowski",
      "competitors": [
          "Filipe Gomes Arante de Souza",
          "Christian Junji Litzinger State",
          "Vinícius Moraes de Jesus"
      ]
  },
  {
      "name": "Diffianos",
      "cartoon": "Peppa Pig",
      "competitors": [
          "Arthur Roberto Barboza Maciel",
          "Miguel Vieira Machado Pim",
          "Murilo Salvador Dalmonech"
      ]
  },
  {
      "name": "Orcas",
      "cartoon": "Backyardigans",
      "competitors": [
          "Gabriel Nascimento Oliveira",
          "Matheus Souza Ribeiro",
          "Gabriella Sirtoli Borges"
      ]
  },
  {
      "name": "CyberNinjas",
      "cartoon": "Incrível Mundo de Gumball",
      "competitors": [
          "Raphael Soares Suarez",
          "Conrado Antoniazi dos Santos",
          "Gabriel Sena da Cunha"
      ]
  },
  {
      "name": "ChatGPT FC",
      "cartoon": "Padrinhos Mágicos",
      "competitors": [
          "Eduardo Marchese Perim",
          "Pedro Antônio Rosa de Souza",
          "Victor Soares Setubal Wingler Lucas"
      ]
  },
  {
      "name": "Breakpoint",
      "cartoon": "Scooby-doo",
      "competitors": [
          "Eduardo Stein Saleme",
          "Murilo Patrício Nascimento",
          "Pedro Henrique Muniz Carvalho"
      ]
  },
  {
      "name": "Duro de Codar",
      "cartoon": "Bob Esponja",
      "competitors": [
          "Ana Tereza Ribeiro Soares Pereira",
          "Vitor Dadalto Camara Gomes",
          "Felipe Mattos Vanetti de Albuquerque"
      ]
  },
  {
      "name": "Flapjack",
      "cartoon": "Flapjack",
      "competitors": [
          "Maria Eduarda Noia Mattos de Azevedo",
          "Samuel Bagatelli Sampaio",
          "Antônio Vitor Prinz Moraes"
      ]
  },
  {
      "name": "Pastosa",
      "cartoon": "South Park",
      "competitors": [
          "Rafael Ribeiro Carvalho",
          "Gabriel Zuany Duarte Vargas",
          "Lorenzo Rizze Fiorot"
      ]
  },
  {
      "name": "Machine Burning",
      "cartoon": "Futurama",
      "competitors": [
          "Pedro Igor Gomes de Morais",
          "Marlon Moratti do Amaral",
          "Matheus Saick de Martin"
      ]
  },
  {
      "name": "if foda else moda ",
      "cartoon": "Apenas um show",
      "competitors": [
          "João Paulo Salamon",
          "Guilherme Augusto Barbosa Amorim",
          "João Vitor da Silva Araújo"
      ]
  },
  {
      "name": "Os de Humanas e o Arthur",
      "cartoon": "Gravity Falls",
      "competitors": [
          "Arthur Cambeia Heher da Silva",
          "Lívia Helena Rosa Scopel",
          "Pedro Henrique Mendonça Simões"
      ]
  },
  {
      "name": "Pantufisco",
      "cartoon": "Castelo Animado",
      "competitors": [
          "Amanda Brito Apolinario",
          "Lorenzo Miniguite Scaramussa",
          "Paula Um Porto de Azeredo Bremenkamp"
      ]
  },
  {
      "name": "O Pythaon",
      "cartoon": "Os Simpsons",
      "competitors": [
          "Matheus Luciano Sesana Goldner",
          "Guilherme Ratti Moraes",
          "Edgard de Souza Theotonio"
      ]
  },
  {
      "name": "Cavaleiros do Bom Dia",
      "cartoon": "Irmão do Jorel",
      "competitors": [
          "Leonardo Franco Emerick Albergaria",
          "Gustavo Dutra Santolin",
          "Bruno Menegaz Acerbi"
      ]
  },
  {
      "name": "Muito Bons",
      "cartoon": "South Park",
      "competitors": [
          "Gustavo Oliveira Cássaro",
          "Thales Melo da Penha",
          "Bruno Lopes Altoé"
      ]
  },
  {
      "name": "R-I-P-Sort",
      "cartoon": "Yu-Gi-Oh",
      "competitors": [
          "Dionatas Santos Brito",
          "Alex Santos de Oliveira",
          "Gabriel Luiz de Oliveira Paschoal"
      ]
  },
  {
      "name": "Coda Fofo",
      "cartoon": "Irmão do Jorel",
      "competitors": [
          "Áurea Santos de Oliveira",
          "Lucas Ferreira Salatiel",
          "Milena Curtinhas Santos"
      ]
  },
  {
      "name": "Pyçandu",
      "cartoon": "One Piece",
      "competitors": [
          "Daniel Siqueira de Oliveira",
          "Gustavo Brunoro Nahuz",
          "Lucas Gabriel de Oliveira Costa"
      ]
  },
  {
      "name": "Garotos de Programa",
      "cartoon": "O Incrível Mundo de Gumball",
      "competitors": [
          "Arthur Uliana de Angelo",
          "Davi de Olveira Mendonça",
          "Patrick Avelar Santos Silva"
      ]
  },
  {
      "name": "RuntimeTerror",
      "cartoon": "Invincible",
      "competitors": [
          "Addison Alves Viana",
          "João Paulo Souza Ferrete",
          "Uarlley do Nascimento Amorim",
          "Oberlan Christo Romão"
      ]
  },
  {
      "name": "Lua.py",
      "cartoon": "Scooby Doo",
      "competitors": [
          "Geraldo Afonso Guidine Martins Padua ",
          "Iago Patrick de Melo Gripp Vilas Boas",
          "Marcos Vinicius Vargas Mello",
          "Oberlan Christo Romão"
      ]
  },
  {
      "name": "progAmadores",
      "cartoon": "Ben 10",
      "competitors": [
          "Gabriel Pestana",
          "Vincenzo Tognere Polonini",
          "Italo Henzo Gomes Ferreira"
      ]
  },
  {
      "name": "Discípulos de Elon",
      "cartoon": "Hunter x Hunter",
      "competitors": [
          "Lucas D'Amato Nitz",
          "Tales da Silva Amaral",
          "Jean Carlos Lopes"
      ]
  },
  {
      "name": "NO - Wrong Answer",
      "cartoon": "Shrek",
      "competitors": [
          "Débora Azevedo Caetano",
          "João Pedro de Oliveira Nascente",
          "Bruno de Freitas Silva"
      ]
  },
  {
      "name": "ThiagoFans",
      "cartoon": "Três Espiãs Demais",
      "competitors": [
          "Arthur Coelho Tosi",
          "Daniel Corona de Aguiar",
          "Raphael Correia Dornelas"
      ]
  },
  {
      "name": "Sem nome",
      "cartoon": "Avatar",
      "competitors": [
          "Fernando Azevedo Peres",
          "Igor Mattos Dos Santos Varejão ",
          "Luís Eduardo Freire da Câmara"
      ]
  },
  {
      "name": "Main(){Drama}",
      "cartoon": "Drama total",
      "competitors": [
          "Bernardo Werneck Teixeira",
          "Nuno Henrique Fonseca Andrade",
          "Ian Aigner Silva"
      ]
  },
  {
      "name": "Hawkins",
      "cartoon": "Super Choque",
      "competitors": [
          "Heitor Pinheiro Souza",
          "Rafael Santiago Antônio",
          "Artur Noack De Souza"
      ]
  },
  {
      "name": "Megazord",
      "cartoon": "Hora de Aventura",
      "competitors": [
          "Diana Mello Rosi",
          "Eduarda Tonini Ferri",
          "Elisa Muller Sarmento"
      ]
  },
  {
      "name": "CSabeEssa?",
      "cartoon": "Patolino",
      "competitors": [
          "Bernardo Wutke de Oliveira",
          "Kethlen Correia de Jesus",
          "Matheus dos Santos Milanese",
          "Oberlan Christo Romão"
      ]
  },
  {
      "name": "Time Meia Boca",
      "cartoon": "Pica-Pau",
      "competitors": [
          "Vitor Facco Calmon",
          "Eduarda Pylro Magesk",
          "Antonio Lucio Braga Secchin"
      ]
  },
  {
      "name": "LOSTeam",
      "cartoon": "Naruto",
      "competitors": [
          "Matheus de Oliveira Lima",
          "Matheus Santos de Moura",
          "Matheus Lopes Ferreira Lima"
      ]
  },
  {
      "name": "Helicóptero de Combate",
      "cartoon": "Initial D",
      "competitors": [
          "João Henrique Valbusa Lima",
          "Gabriel de Albuquerque Santos",
          "Renan Campista"
      ]
  },
  {
      "name": "Hilarious",
      "cartoon": "Phineas e Ferb",
      "competitors": [
          "Abner Benicio Silva",
          "Bruno Schneider Plazzi",
          "Filipe Anunciação Batista de Moura"
      ]
  },
  {
      "name": "Esquadrão Anti-Java",
      "cartoon": "Aqua Teen Hunger Force",
      "competitors": [
          "Luiz Henrique Magri Bosi ",
          "Renan Siquara Salles",
          "Henrique Christ Bergami"
      ]
  },
  {
      "name": "Pacwoman",
      "cartoon": "As meninas Superpoderosas",
      "competitors": [
          "Emily Wingler Gonçalves",
          "Clara Luísa Pereira dos Santos Lima",
          "Gabrielly Rosário Dionísio"
      ]
  },
  {
      "name": "NesquickSort",
      "cartoon": "South Park",
      "competitors": [
          "Caio Pereira Lapa",
          "Catterina Vittorazzi Salvador",
          "Pedro Henrique Passos Rocha",
          "Edmar Hell Kampke"
      ]
  },
  {
      "name": "Psicopythons",
      "cartoon": "Apenas um Show",
      "competitors": [
          "Ruan Vieira Ribeiro",
          "João Victor Mascarenhas de Faria Santos",
          "Kaio Stefan Campos Nunes",
          "Edmar Hell Kampke"
      ]
  },
  {
      "name": "JaPyGo",
      "cartoon": "Caverna do Dragão",
      "competitors": [
          "Lara Tagarro Bernardes",
          "Milla Pereira Miguel de Souza",
          "Kevin Carvalho de Jesus"
      ]
  }
]


export default function Teams() {

  return (
    <div>
      <Navbar fromParentSelected={6} />
      <Image className={styles.bodyImageContainer} src={bodyImage1} alt='Imagem de corpo do site' />

      <Header text="EQUIPES CONFIRMADAS" />

      <ScrollUpButton />

      <div className={styles.teamsContainer}>
        {
          teams?.map((team, idx)=>{
            if (!team.competitors[0]) return;
            return (
              <Team 
                key={idx}
                index={idx}
                teamName={team.name}
                teamParticipants={[
                  team.competitors[0],
                  team.competitors[1],
                  team.competitors[2],
                  team.competitors[3],
                ]} />    
            )
          })
        }
      </div>

      <ImageBanner variant={1} />

      <Footer/>
    </div>
  )
}