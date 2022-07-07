import * as S from "./styles";
import { CardProps } from "./interface";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Card(props: CardProps) {
  let [product, setProduct] = useState(0);

  const router = useRouter();

  const priceMember = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(props.cardData.priceMember);

  const priceNonMember = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(props.cardData.priceNonMember);

  const fullPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(props.cardData.price);

  const handleClick = () => {
    router.push(`product/${props.cardData.id}`)
  };

  return (
    <S.Container>
      <S.Content>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img src={props.cardData.image} alt="imagem dos vinhos" onClick={handleClick} />
        <S.WineTitle>{props.cardData.name}</S.WineTitle>
        <S.discountPrice>
          <span>{fullPrice}</span>
          <span>{props.cardData.discount}% OFF</span>
        </S.discountPrice>
        <S.winePartner>
          <span>sócio wine</span>
          <span>{priceMember}</span>
        </S.winePartner>
        <S.notPartner>
          <span>NÃO SÓCIO {priceNonMember}</span>
        </S.notPartner>
        <S.addButton
          onClick={() =>
            localStorage.setItem("product", JSON.stringify(product++))
          }
        >
          ADICIONAR
        </S.addButton>
      </S.Content>
    </S.Container>
  );
}
