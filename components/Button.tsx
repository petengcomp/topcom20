import styles from '../styles/components/Button.module.css'

import line from '../assets/buttonLineDetail.svg'
import Image from 'next/image'

interface ButtonProps {
    text: string
}

export function Button({ text }: ButtonProps) {
    return (
        <button className={styles.buttonBox}>
            <Image src={line} alt="line detail" className={styles.line}/>
            <span>{text}</span>
        </button>
    )
}
