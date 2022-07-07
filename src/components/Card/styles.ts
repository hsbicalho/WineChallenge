import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 218px;
  height: 400px;
  margin-bottom: 0.5rem;
`;

export const addButton = styled.button`
  margin-top: 2rem;
  height: 2.46rem;
  width: 100%;
  background-color: #7ebc43;
  border-radius: 3.89354px;
  border-width: 0;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  padding: 0.73rem 1.4601rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 333px;
  width: 256px;
  background-color: #ffffff;
  margin: 0 0.4375rem;
  border-radius: 4px;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);

  img {
    margin: auto;
    width: 130px;
    height: 178.1296px;
    left: 11.41%;
    right: 11.03%;
    top: 2.26%;
    bottom: 51.71%;
    cursor: pointer;
  }
`;

export const WineTitle = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1875rem;
  text-align: center;
  letter-spacing: -0.222488px;
  color: #1d1d1b;

  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

export const discountPrice = styled.p`
  width: 100%;
  text-align: center;

  span:first-of-type {
    text-decoration: line-through;
    padding-right: 1rem;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 0.6875rem;
    line-height: 1rem;
    color: #888888;
  }

  span:nth-child(2) {
    text-decoration: none;
    background-color: #f79552;
    color: white;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 0.75rem;
    border-radius: 0.1217rem;
  }
`;

export const winePartner = styled.p`
  width: 100%;
  text-align: center;

  span:first-child {
    color: #1d1d1b;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 10px;
    text-transform: uppercase;
    padding-right: 0.25rem;
  }

  span:nth-child(2) {
    color: #b6116e;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 27px;
  }
`;

export const notPartner = styled.p`
  width: 100%;
  color: #888888;
  text-align: center;
  span:first-child {
    right: 10px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }
`;
