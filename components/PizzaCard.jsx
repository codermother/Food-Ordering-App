import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

function PizzaCard({ product }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link href={`/product/${product._id}`}>
          <div>
            <Image src={product.img} alt="" width={500} height={500} />
          </div>
        </Link>
      </div>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>${product.prices[0]}</span>
      <p className={styles.desc}>{product.desc}</p>
    </div>
  );
}

export default PizzaCard;
