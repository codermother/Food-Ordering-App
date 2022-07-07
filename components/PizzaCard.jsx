import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

function PizzaCard() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        {" "}
        <Image src="/img/pizza.png" alt="" width={500} height={500} />
      </div>

      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default PizzaCard;
