import styles from '../styles/components/Team.module.css'

interface TeamProps {
    teamName: string
    teamParticipants: string[]
}

export function Team({ teamName, teamParticipants }: TeamProps) {

    return (
        <div>
            {teamName} <br></br>
            {teamParticipants}
        </div>
    )
}