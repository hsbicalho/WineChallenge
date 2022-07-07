/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import RadioProps from "./interface";
import * as S from "./style";

export default function Radio(props: RadioProps) {
  const { filterByValue } = props;
  return (
    <S.Container>
      <span> Por preço</span>
      <S.Wrapper>
        <S.Radio
          type="radio"
          name="radio"
          value="optionA"
          onClick={(e) => filterByValue((e.target as HTMLInputElement).value)}
        />
        <label htmlFor="radio"> Até R$40</label>
      </S.Wrapper>
      <S.Wrapper>
        <S.Radio
          type="radio"
          name="radio"
          value="optionB"
          onClick={(e) => filterByValue((e.target as HTMLInputElement).value)}
        />
        <label htmlFor="radio">R$40 A R$60</label>
      </S.Wrapper>
      <S.Wrapper>
        <S.Radio
          type="radio"
          name="radio"
          value="optionC"
          onClick={(e) => filterByValue((e.target as HTMLInputElement).value)}
        />
        <label htmlFor="radio"> R$100 A R$200</label>
      </S.Wrapper>
      <S.Wrapper>
        <S.Radio
          type="radio"
          name="radio"
          value="optionD"
          onClick={(e) => filterByValue((e.target as HTMLInputElement).value)}
        />
        <label htmlFor="radio"> R$200 A R$500</label>
      </S.Wrapper>
      <S.Wrapper>
        <S.Radio
          type="radio"
          name="radio"
          value="optionE"
          onClick={(e) => filterByValue((e.target as HTMLInputElement).value)}
        />
        <label htmlFor="radio"> Acima de R$500</label>
      </S.Wrapper>
    </S.Container>
  );
}
