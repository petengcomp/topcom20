import styles from '../styles/components/InfoCard.module.css'


interface InfoCardProps {
  title: string
  text: JSX.Element
  icon: JSX.Element
}

export function InfoCard({
  title,
  text,
  icon
}:InfoCardProps){
  return (
    <div className={styles.cardContainer}>
      <h2>{title}</h2>
      {text}
      <div className={styles.iconContainer}>
        {icon}
      </div>
    </div>
  )
}