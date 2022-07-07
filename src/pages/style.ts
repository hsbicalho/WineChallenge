import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 40%;
  flex-wrap: wrap;
`;

export const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  &total-span {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 14px;
    color: #262626;
  }
`;
export const PageButton = styled.button`
  background-color: ${(props) => (props.primary ? "#b6116e" : "transparent")};
  color: ${(props) => (props.primary ? "#f5f5f5" : "#b6116e")};
  border: 1px solid #b6116e;
  border-radius: 3px;
  box-sizing: border-box;
  height: 38px;
  width: ${(props) => (props.chosen ? "73px" : "38px")};
  left: 0%;
  margin: 0.25rem;
  top: 0%;
  bottom: 0%;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
export const PrevNextButton = styled.button`
  color: #b6116e;
  border: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 14.4px;
`;

export const PageContainer = styled.div`
  margin-left: ${(props) => (props.prev ? "39.3%" : "44%")};
  margin-top: 300px;
`;

export const SearchButton = styled.div`
  border: none;
  background-color: transparent;
  position: absolute;
`;
export const SearchInput = styled.input`
  position: absolute;
  margin-left: 9rem;
`;
