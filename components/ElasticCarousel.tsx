//carousels/Elastic.js
import { items } from "../public/Items.json";
import Carousel from "react-elastic-carousel";
import styles from "../styles/components/Elastic.module.css";
export default function ElasticCarousel() {
  const { elastic } = items;
  return (
    <div className={styles.container}>
      <div className={styles.contWrapper}>
        <Carousel>
          {elastic.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className={styles.title}>
                <h3>{item.title} </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
