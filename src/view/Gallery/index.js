import React from "react";
import Section from "../../components/Section";
import Carousel from "../../components/Carousel";
import styles from "./Gallery.module.scss";
import CardImage from "../../components/CardImage";
import photo1 from "../../images/carousel/1.jpeg";
import photo2 from "../../images/carousel/2.jpeg";
import photo3 from "../../images/carousel/3.jpeg";
import photo4 from "../../images/carousel/4.jpeg";
import photo5 from "../../images/carousel/5.jpeg";
import photo7 from "../../images/carousel/7.jpeg";
import photo8 from "../../images/carousel/8.jpeg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo7, photo8];

export default function Gallery() {
  return (
    <Section secondaryBg>
      <div>
        <h1>Retratos de Nuestro Amor</h1>
        <p>Un minuto, un segundo, un instante que queda en la eternidad</p>

        <div className={styles.carousel}>
          <Carousel>
            {photos.map((photo, i) => (
              <CardImage key={i} imageUrl={photo} />
            ))}
          </Carousel>
        </div>
      </div>
    </Section>
  );
}