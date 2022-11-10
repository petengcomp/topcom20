import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import ImageBanner from '../components/ImageBanner'
import { Navbar } from '../components/Navbar'

export default function Certifications() {
    return (
        <div>
            <Navbar fromParentSelected={3} />
            <Header text="CERTIFICADOS"></Header>
            <ImageBanner variant={2}></ImageBanner>
            <Footer></Footer>
        </div>
    )
}
