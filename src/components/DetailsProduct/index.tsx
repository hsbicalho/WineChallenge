import React from "react";
import { CardInfoProps } from "./interface";
import * as S from "./style";

export default function DetailsProduct(props: CardInfoProps) {
  const { cardInfo } = props;
  return (
    <>
      <S.InfoContainer>
        <div className="initial-title">
          <span className="wineColor">Vinhos </span>
          &rsaquo;
          <span className="wineColor">{cardInfo?.country}</span>
          &rsaquo;
          <span> {cardInfo?.region}</span>
        </div>
        <div>
          <div className="title">{cardInfo?.name}</div>
          <p className="infos-span">
            <img src={cardInfo?.flag} alt={cardInfo?.flag} />
            {cardInfo?.country}
            {cardInfo?.type}
            {cardInfo?.classification}
            {cardInfo?.size}({cardInfo?.rating})
          </p>
        </div>
        <div className="priceContainer">
          <p className="priceMember">
            R$ {String(cardInfo?.priceMember).replace(".", ",")}
          </p>
          <p className="priceNonMember">
            NÃO SÓCIO {String(cardInfo?.priceNonMember).replace(".", ",")}
            /UN
          </p>
        </div>

        <div>
          <p className="comentario-sommelier-title">Comentario do Sommelier</p>
          <p className="comentario-sommelier-content">
            {cardInfo?.sommelierComment}
          </p>
        </div>
      </S.InfoContainer>
      <S.ImgContainer>
        <img src={cardInfo?.image} alt="imagem do vinho" />
      </S.ImgContainer>
    </>
  );
}
