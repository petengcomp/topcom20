import styles from '../styles/components/MarathonBox.module.css'

interface podiumMemberProps {
    university: string
    teams: JSX.Element
}

export function MarathonBox({university, teams}: podiumMemberProps) {
    return (
        <div className={styles.marathonBox}>
            <h3>{ university }</h3>
            <div className={styles.marathonTeams}>
                {teams}
            </div>
        </div>
    )
}