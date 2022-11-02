import styles from '../styles/components/Team.module.css'

interface TeamProps {
    teamName: string
    teamParticipants: string[]
    index: number
}

export function Team({ teamName, teamParticipants, index }: TeamProps) {
    return (
        <div className={`${styles.team} ${index % 2 == 0 ? styles.teamWhite : styles.teamBlack}`} >
            {teamName} <br></br>
            {teamParticipants}
        </div>
    )
}