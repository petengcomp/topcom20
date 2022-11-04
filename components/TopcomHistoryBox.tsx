import Image, { StaticImageData } from 'next/image';
import styles from '../styles/components/TopcomHistoryBox.module.css';
interface TopcomHistoryBoxProps {
    title: string
    ano: number[]
    description: string
    image?: StaticImageData
    balloonPosition: 'left' | 'right'
}
    export function TopcomHistoryBox({ title, ano, description, image, balloonPosition }: TopcomHistoryBoxProps) {
        let anoString = "";
        ano.forEach((ano, index) => {
            if (index === 0) {
                anoString += ano;
            } else {
                anoString += ` e ${ano}`;
            }
        });
        
        if (image!=null){
            if (balloonPosition === 'right')
                return (
                    <div className={styles.boxRight}>
                        <div className={styles.topcomLogo}>
                            <Image src={image} alt="topcom" />
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.textRight}>
                            <h1 className={styles.title}>{title.toUpperCase()}</h1>
                            <h2 className={styles.year}>Ano: {anoString}</h2>
                            <p className={styles.description}>{description}</p>
                        </div>
                    </div>
                )
            else
            return (
                <div className={styles.boxLeft}>
                    <div className={styles.topcomLogo}>
                        <Image src={image} alt="topcom" />
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.textLeft}>
                        <h1 className={styles.title}>{title.toUpperCase()}</h1>
                        <h2 className={styles.year}>Ano: {anoString}</h2>
                        <p className={styles.description}>{description}</p>
                    </div>
                </div>
            )
        }
        else{
            if (balloonPosition === 'right')
                return (
                    <div className={styles.boxRight}>
                        <div className={styles.topcomLogo}/>
                        <div className={styles.line}/>
                        <div className={styles.textRight}>
                            <h1 className={styles.title}>{title.toUpperCase()}</h1>
                            <h2 className={styles.year}>Ano: {anoString}</h2>
                            <p className={styles.description}>{description}</p>
                        </div>
                    </div>
                )
            else
                return (
                    <div className={styles.boxLeft}>
                        <div className={styles.topcomLogo}/>
                        <div className={styles.line}/>
                        <div className={styles.textLeft}>
                            <h1 className={styles.title}>{title.toUpperCase()}</h1>
                            <h2 className={styles.year}>Ano: {anoString}</h2>
                            <p className={styles.description}>{description}</p>
                        </div>
                    </div>
                )
        }   
    }