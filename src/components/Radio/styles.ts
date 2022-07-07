import styled from "styled-components";

export const Radio = styled.input`
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  width: 30%;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 10.0625rem;
  margin-right: -131px;
  span:first-of-type {
    color: #000000;
    font-family: "Neo Sans Std";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 3rem;
  }
  span:nth-child(2) {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
    color: #333333;
  }
`;
