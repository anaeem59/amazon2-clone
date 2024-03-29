import React from "react";
import { Banner } from "./Banner";
import { ProductFeed } from "./ProductFeed";

export const Home = ({ products }) => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Banner />
      <ProductFeed products={products} />
    </main>
  );
};

// export async function getServerSideProps(context) {
//     const products = await fetch("https://fakestoreapi.com/products").then((res) =>
//     res.json()
//     );
    
//       return {
//         props: {
//           products,
//         },
//       };
//     }