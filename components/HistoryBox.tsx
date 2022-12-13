import Image, { StaticImageData } from 'next/image';
import styles from '../styles/components/HistoryBox.module.css';
interface HistoryBoxProps {
    title: string
    ano: number[]
    description: string
    image?: StaticImageData
    balloonPosition: 'left' | 'right'
    balloonImage: StaticImageData
    link?: string
}
export function HistoryBox({ title, ano, description, image, balloonPosition, balloonImage, link }: HistoryBoxProps) {
    let anoString = "";
    ano.forEach((ano, index) => {
        if (index === 0) {
            anoString += ano;
        } else {
            anoString += ` e ${ano}`;
        }
    });

    if (image != null) {
        if (balloonPosition === 'right')
            return (
                <div className={styles.boxRight}>
                    <div className={styles.topcomLogo}>
                        {link ? (
                            <a href={link} target="_blank">
                                <Image src={image} alt="topcom" />
                            </a>)
                            :
                            <Image src={image} alt="topcom" />
                        }

                    </div>
                    <div className={styles.lineContainer}>
                        <div className={styles.line} />
                        <Image src={balloonImage} alt="balão" />
                    </div>
                    <div className={styles.textRight}>
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
        else
            return (
                <div className={styles.boxLeft}>
                    <div className={styles.topcomLogoRight}>
                        {link ? (
                            <a href={link} target="_blank">
                                <Image src={image} alt="topcom" />
                            </a>)
                            :
                            <Image src={image} alt="topcom" />
                        }
                    </div>
                    <div className={styles.lineContainer}>
                        <Image src={balloonImage} alt="balão" />
                        <div className={styles.line} />
                    </div>
                    <div className={styles.textLeft}>
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
        if (balloonPosition === 'right')
            return (
                <div className={styles.boxRight}>
                    <div className={styles.topcomLogo} />
                    <div className={styles.lineContainer}>
                        <div className={styles.line} />
                        <Image src={balloonImage} alt="balão" />
                    </div>
                    <div className={styles.textRight}>
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
        else
            return (
                <div className={styles.boxLeft}>
                    <div className={styles.topcomLogo} />
                    <div className={styles.lineContainer}>
                        <Image src={balloonImage} alt="balão" />
                        <div className={styles.line} />
                    </div>
                    <div className={styles.textLeft}>
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