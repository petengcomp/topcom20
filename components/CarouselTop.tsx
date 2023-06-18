import styles from "../styles/components/Carousel.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export function CarouselTop() {
  var items = [
    { "id": 1, "title": "Abertura", "imageUrl": "photos/abertura.jpg" },
    { "id": 2, "title": "Labgrad1", "imageUrl": "photos/labgrad1_2.jpg" },
    { "id": 3, "title": "Labgrad1", "imageUrl": "photos/labgrad1.jpg" },
    { "id": 4, "title": "Equipe", "imageUrl": "photos/equipe1.jpg" },
    { "id": 5, "title": "Staff", "imageUrl": "photos/staff.jpg" },
    { "id": 6, "title": "Labgrad2", "imageUrl": "photos/labgrad2.jpg" },
    { "id": 7, "title": "Labgrad3", "imageUrl": "photos/labgrad3.jpg" },
    { "id": 8, "title": "Primeiro Lugar", "imageUrl": "photos/primeirolugar.jpg" },
    { "id": 9, "title": "Segundo Lugar", "imageUrl": "photos/segundolugar.jpg" },
    { "id": 10, "title": "Terceiro Lugar", "imageUrl": "photos/terceirolugar.jpg" },
    { "id": 11, "title": "Labgrad1", "imageUrl": "photos/labgrad1_3.jpg" },
    { "id": 12, "title": "Trofeus", "imageUrl": "photos/trofeus.jpg" }
  ]

  return (
    <div className={styles.mainContainer}>
      <Carousel>
        {
          items.map((photo, idx)=>(
            <div className={styles.card}>
              <img key={idx} src={photo.imageUrl} className={styles.card}/>
              {/* <p>{photo.title}</p> */}
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}


