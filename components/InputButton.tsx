import styles from '../styles/components/InputButton.module.css'
import { Button } from './Button'

interface ButtonProps {
    textInput: string
    textButton: string
}

export function InputButton({ textInput, textButton }: ButtonProps) {
    return (
        <div>
            <form onSubmit={submitContact}>
                <label htmlFor="email"></label>
                <input
                    className={styles.inputBox}
                    id="email"
                    name="email"
                    type="text"
                    required
                    placeholder="Email"
                />
                <button type="submit" className={styles.buttonBox}>
                    <span>{textButton}</span>
                </button>
            </form>
        </div>
    )
}

const submitContact = async (event: any) => {
    event.preventDefault()
    alert(`Email ${event.target.email.value}`)
}
