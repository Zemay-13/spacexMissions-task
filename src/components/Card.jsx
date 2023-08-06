import { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ title, date, details, image }) => {
  const [descShort, setDescShort] = useState(true);
  const intlDate = new Intl.DateTimeFormat("ru-RU").format(new Date(date));
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{intlDate}</h2>
      <div>
        <p
          onClick={() => setDescShort(!descShort)}
          className={descShort ? styles.descShort : styles.desc}
        >
          {details}
        </p>
      </div>
      <img className={styles.imgCard} src={image} alt="" />
    </div>
  );
};

export default Card;
