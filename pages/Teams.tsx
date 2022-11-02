import { Navbar } from "../components/Navbar";
import { Team } from "../components/Team"
import styles from "../styles/pages/Teams.module.css"

export default function Teams() {
  return (
    <div>
      <Navbar fromParentSelected={6} />

      <div className={styles.teamsHeader}>
        <p>---------- EQUIPES CONFIRMADAS ----------</p>
      </div>

      <div className={styles.teamsContainer}>
        <Team key={0} index={0} teamName="Manjava" teamParticipants={["luiz", "matheus"]} />
        <Team key={1} index={1} teamName="Pythaun" teamParticipants={["joao", "avonso"]} />
        <Team key={2} index={2} teamName="Malloc sem free" teamParticipants={["lara", "kevin"]} />
        <Team key={2} index={3} teamName="Malloc sem free" teamParticipants={["lara", "kevin"]} />
        <Team key={2} index={4} teamName="Malloc sem free" teamParticipants={["lara", "kevin"]} />
        <Team key={2} index={5} teamName="Malloc sem free" teamParticipants={["lara", "kevin"]} />
        <Team key={2} index={6} teamName="Malloc sem free" teamParticipants={["lara", "kevin"]} />
        <Team key={2} index={7} teamName="Malloc sem free" teamParticipants={["lara", "kevin"]} />
        <Team key={2} index={8} teamName="Malloc sem free" teamParticipants={["lara", "kevin"]} />
        <Team key={2} index={9} teamName="Malloc sem free" teamParticipants={["lara", "kevin"]} />
        <Team key={2} index={10} teamName="Malloc sem free" teamParticipants={["lara", "kevin"]} />
        <Team key={2} index={11} teamName="Malloc sem free" teamParticipants={["lara", "kevin"]} />
      </div>
    </div>
  )
}