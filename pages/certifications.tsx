import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import ImageBanner from '../components/ImageBanner'
import { Navbar } from '../components/Navbar'
import { InputButton } from '../components/InputButton'
import styles from '../styles/pages/Certifications.module.css'
import Image from 'next/image'
import bodyImage1 from '../assets/bodyImage1.png'

export default function Certifications() {
    return (
        <div>
            <Navbar fromParentSelected={3} />
            <Image
                className={styles.bodyImageContainer}
                src={bodyImage1}
                alt="Imagem de corpo do site"
            />
            <Header text="CERTIFICADOS"></Header>
            <body className={styles.body}>
                <InputButton
                    textInput="Email"
                    textButton="SOLICITAR CERTIFICADOS"
                ></InputButton>
            </body>
            <ImageBanner variant={2}></ImageBanner>
            <Footer></Footer>
        </div>
    )
}
