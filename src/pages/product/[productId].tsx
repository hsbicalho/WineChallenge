import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { useProducts } from "../../hooks/useProducts";
import { BackToHomeButton } from "./style";

import { ItemProps } from "../../utils/interfaces";
import DetailsProduct from "../../components/DetailsProduct";

export default function ProductDetails() {
  const [data, setData] = useState<ItemProps>();
  const { getProductById } = useProducts();
  const { query, push } = useRouter();

  useEffect(() => {
    const fetchProduct = getProductById(Number(query.productId));
    setData(fetchProduct);
  }, []);

  return (
    <>
      <Navbar />
      <BackToHomeButton onClick={() => push("/")}>
        <span>&lang; &nbsp; Voltar</span>
      </BackToHomeButton>
      <DetailsProduct cardInfo={data} />
    </>
  );
}
