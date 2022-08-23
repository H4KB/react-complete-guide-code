import React from "react";
import { useParams } from "react-router-dom";

const ProductDetaile = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>ProductDetaile</h1>
    </section>
  );
};

export default ProductDetaile;
