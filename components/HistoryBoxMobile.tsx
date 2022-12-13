import Image, { StaticImageData } from 'next/image';
import styles from '../styles/components/HistoryBoxMobile.module.css';
interface HistoryBoxProps {
    title: string
    ano: number[]
    description: string
    image?: StaticImageData
    link?: string
}
export function HistoryBoxMobile({ title, ano, description, image, link }: HistoryBoxProps) {
    let anoString = "";
    ano.forEach((ano, index) => {
        if (index === 0) {
            anoString += ano;
        } else {
            anoString += ` e ${ano}`;
        }
    });

    if (image != null) {
        return (
            <div className={styles.box}>
                <div className={styles.topcomLogo}>
                    {link ? (
                        <a href={link} target="_blank">
                            <Image src={image} alt="topcom" layout='responsive' />
                        </a>)
                        :
                        <Image src={image} alt="topcom" layout='responsive' />
                    }

                </div>
                <div className={styles.text}>
                    {link ? (
                        <a href={link} target="_blank">
                            <h1 className={styles.title}>{title.toUpperCase()}</h1>
                        </a>
                    )
                        :
                        <h1 className={styles.title}>{title.toUpperCase()}</h1>
                    }
                    <h2 className={styles.year}>Ano: {anoString}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={styles.box}>
                <div className={styles.topcomLogo} />
                <div className={styles.text}>
                    {link ? (
                        <a href={link} target="_blank">
                            <h1 className={styles.title}>{title.toUpperCase()}</h1>
                        </a>
                    )
                        :
                        <h1 className={styles.title}>{title.toUpperCase()}</h1>
                    }
                    <h2 className={styles.year}>Ano: {anoString}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        )
    }
}