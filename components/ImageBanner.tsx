import styles from '../styles/components/ImageBanner.module.css'

interface ImageBannerProps {
  variant: number
}

export default function ImageBanner({variant}:ImageBannerProps) {
  
  if (variant==1) return (
    <div
      className={styles.container}
      id={styles.variant1} />
  )
  else return <div className={styles.container} id={styles.variant2} />
}
