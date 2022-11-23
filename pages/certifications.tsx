import styles from "../styles/pages/Certifications.module.css"
import bodyImage1 from "../assets/bodyImage1.png"
import { useState } from "react"
import Image from "next/image"

import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"
import ImageBanner from "../components/ImageBanner"
import { Button } from "../components/Button"

export default function Certifications() {
  const [ email, setEmail ] = useState<string>();

  async function requestCertificate(e:any) {
    e.preventDefault()
    alert(email)
  }
  
  
  return (
    <div>
      <Navbar fromParentSelected={3} />
      <Image
        className={styles.bodyImageContainer}
        src={bodyImage1}
        alt="Imagem de corpo do site"
      />
      <Header text="CERTIFICADOS" />

      <div className={styles.formsContainer}>
        <form onSubmit={requestCertificate}>
          <label htmlFor="email"></label>
          <input
            className={styles.inputBox}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="EMAIL"
            required
          />
          <Button text="SOLICITAR CERTIFICADO" />


        </form>
      </div>

      <ImageBanner variant={2} />
      <Footer />
    </div>
  )
}
