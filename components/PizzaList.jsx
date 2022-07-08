import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

function PizzaList({ productList }) {
  console.log(productList);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>

      <div className={styles.wrapper}>
        {productList.map((product) => (
          <PizzaCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default PizzaList;
