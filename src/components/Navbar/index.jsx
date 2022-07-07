import React from "react";
import Image from "next/image";
import * as S from "./styles";
import wineLogo from "../../assets/wineLogo.svg";
import lupa from "../../public/Busca.svg";
import profile from "../../public/conta.svg";
import carrinho from "../../public/vazio.svg";

export default function Navbar() {
  return (
    <S.Container>
      <Image src={wineLogo} alt="logo da wine" />
      <S.NavLinksContainer>
        <S.eveyOtherP>Clube</S.eveyOtherP>
        <S.LojaP>Loja</S.LojaP>
        <S.eveyOtherP>Produtores</S.eveyOtherP>
        <S.eveyOtherP>Ofertas</S.eveyOtherP>
        <S.eveyOtherP>Eventos</S.eveyOtherP>
      </S.NavLinksContainer>
      <S.NavImgsContainer>
        <Image src={lupa} alt="lupinha" />
        <Image src={profile} alt="perfil" />
        <Image src={carrinho} alt="carrinho de compra" />
      </S.NavImgsContainer>
    </S.Container>
  );
}
