import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  left: 832px;
  top: 167px;
  width: 462.22px;
  height: 500px;

  & .infos-span {
    margin-top: 2rem;
    color: #555555;
  }

  & .priceContainer {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  & .priceMember {
    width: 123px;
    height: 32px;

    font-family: "Saira";
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 32px;

    display: flex;
    align-items: center;
    letter-spacing: -0.48675px;

    color: #c81a78;
  }

  & .priceNonMember {
    width: 199px;
    height: 19px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-feature-settings: "liga" off;

    color: #888888;
  }

  & .wineColor {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #c81a78;
    margin: 5px;
  }

  & .title {
    font-family: "Neo Sans Std";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    width: 448px;
    height: 32px;
  }

  & .comentario-sommelier-title {
    font-family: "Neo Sans Std";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #111111;
  }

  & .comentario-sommelier-content {
    width: 448px;
    height: 105px;

    font-family: "Saira";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;

    color: #666666;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

export const ImgContainer = styled.div`
  position: absolute;
  width: 381px;
  height: 579px;
  left: 250px;
  top: 185px;
`;
