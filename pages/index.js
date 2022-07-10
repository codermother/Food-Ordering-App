import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";

export default function Home({ productList }) {
  return (
    <div>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList productList={productList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await axios.get("http://localhost:3000/api/products");
  return {
    props: { productList: response.data },
  };
};
