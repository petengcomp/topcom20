import styles from '../styles/components/Team.module.css'

interface TeamProps {
    teamName: string
    teamParticipants: string[]
    index: number
}

export function Team({ teamName, teamParticipants, index }: TeamProps) {
    return (
        <div className={`${styles.team} ${index % 2 == 0 ? styles.teamWhite : styles.teamBlack}`} >
            <p className={styles.teamName}>
                {teamName}
            </p>
            <p className={styles.teamParticipant}>{teamParticipants[0]}</p>
            <p className={styles.teamParticipant}>{teamParticipants[1]}</p>
            <p className={styles.teamParticipant}>{teamParticipants[2]}</p>
        </div>
    )
}