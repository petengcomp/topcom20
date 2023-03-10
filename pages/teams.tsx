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

export default function Teams() {

  const [ teams, setTeams ] = useState<TeamType[]>([])

  async function fetchTeams() {
    try{
      const response = await api.post('teams', {
        key: process.env.NEXT_PUBLIC_API_KEY
      })
      setTeams(response.data)
    }catch(err){

    }
  }

  useEffect(()=>{
    fetchTeams()
  }, [])
  return (
    <div>
      <Navbar fromParentSelected={6} />
      <Image className={styles.bodyImageContainer} src={bodyImage1} alt='Imagem de corpo do site' />

      <Header text="EQUIPES CONFIRMADAS" />

      <ScrollUpButton />

      <div className={styles.teamsContainer}>
        {
          teams?.map((team, idx)=>{
            if (!team.integrante1) return;
            return (
              <Team 
                key={idx}
                index={idx}
                teamName={team.nomeEquipe}
                teamParticipants={[
                  team.integrante1.nome,
                  team.integrante2?team.integrante2.nome:"",
                  team.integrante3?team.integrante3.nome:""
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