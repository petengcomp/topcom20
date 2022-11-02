import styles from '../styles/components/Header.module.css'

interface HeaderProps {
    text: string
}

export function Header({ text }: HeaderProps) {
    return (
        <div className={styles.headerContainer} >
            <span>
                {text}
            </span>
        </div>
    )
}