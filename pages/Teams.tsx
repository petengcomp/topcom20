import { Navbar } from "../components/Navbar";
import { Team } from "../components/Team"

export default function Teams() {
  return (
    <div>
      <Navbar fromParentSelected={6} />

      <div>
        EQUIPES CONFIRMADAS
      </div>

      <div>
        <Team key={0} teamName="Manjava" teamParticipants={["luiz", "matheus"]} />
        <Team key={1} teamName="Pythaun" teamParticipants={["joao", "avonso"]} />
        <Team key={2} teamName="Malloc sem free" teamParticipants={["lara", "kevin"]} />
      </div>

    </div>
  )
}