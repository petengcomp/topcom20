import Image, { StaticImageData } from 'next/image'
import styles from '../styles/components/PodiumMember.module.css'

interface podiumMemberProps {
    teamName: string
    teamParticipants: string[]
    image: StaticImageData
}

export function PodiumMember({teamName, teamParticipants, image}: podiumMemberProps) {
    return (
        <div className={styles.teamContainer}>
            <Image src={image} alt='Pódio Topcom' className={styles.podiumImage}/>
            <p className={styles.teamName}>
                {teamName}
            </p>
            <p className={styles.teamParticipant}>{teamParticipants[0]}</p>
            <p className={styles.teamParticipant}>{teamParticipants[1]}</p>
            <p className={styles.teamParticipant}>{teamParticipants[2]}</p>
        </div>
    )
}