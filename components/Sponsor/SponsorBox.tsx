import styles from "../../styles/components/Sponsor/SponsorBox.module.css";

interface SponsorBoxProps {
  imagePath: string;
  text: string;
  textColor: string;
}

export function SponsorBox({ imagePath, text, textColor }: SponsorBoxProps) {
  const parameterStyles = {
    p: {
      color: textColor,
    },
  };

  return (
    <div style={parameterStyles.p} className={styles.main_container}>
      <div className={styles.image_container}>
        <img src={imagePath} alt="Logo do Patrocinador" />
      </div>
      <p>{text}</p>
    </div>
  );
}
