import styles from '../styles/components/Button.module.css'

interface ButtonProps {
    text: string
}

export function Button({ text }: ButtonProps) {
    return (
        <button className={styles.buttonBox}>
            <span>{text}</span>
        </button>
    )
}
