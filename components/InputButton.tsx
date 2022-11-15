import styles from "../styles/components/InputButton.module.css"

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
          type="email"
          required
          placeholder={textInput}
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
