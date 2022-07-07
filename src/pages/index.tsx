import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { ItemProps } from "../utils/interfaces";
import {
  Layout,
  Main,
  PageButton,
  PrevNextButton,
  PageContainer,
  SearchButton,
  SearchInput,
} from "./style";
import Radio from "../components/Radio";
import { useProducts } from "../hooks/useProducts";

function Home() {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByProductName, setSearchByProductName] = useState(false);

  const { allProducts } = useProducts();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`
      );
      const response = await data.json();
      setItems(response.items);
      setTotalItems(response.totalItems);
    };
    fetchData();
  }, [page]);

  const filterByName = (wineName: string) => {
    const filteredWines = allProducts.filter((wine) =>
      wine.name.toLocaleLowerCase().startsWith(wineName.toLowerCase())
    );
    if (wineName !== "") setItems(filteredWines);
  };

  const handleFilterByValue = (value: string) => {
    if (value === "optionA") {
      const filteredWinesByValue = allProducts.filter(
        (wine) => wine.price <= 40
      );
      console.log(filteredWinesByValue);
      if (filteredWinesByValue.length === 0) {
        alert("nenhum vinho encontrado");
        setPage(2);
      }
      setItems(filteredWinesByValue);
    }
    if (value === "optionB") {
      const filteredWinesByValue = allProducts.filter(
        (wine) => wine.price >= 40 && wine.price <= 60
      );
      if (filteredWinesByValue.length === 0) {
        alert("nenhum vinho encontrado");
        setPage(2);
      }
      setItems(filteredWinesByValue);
    }
    if (value === "optionC") {
      const filteredWinesByValue = allProducts.filter(
        (wine) => wine.price >= 100 && wine.price <= 200
      );
      if (filteredWinesByValue.length === 0) {
        alert("nenhum vinho encontrado");
        setPage(2);
      }
      setItems(filteredWinesByValue);
    }
    if (value === "optionD") {
      const filteredWinesByValue = allProducts.filter(
        (wine) => wine.price >= 200 && wine.price <= 500
      );
      if (filteredWinesByValue.length === 0) {
        alert("nenhum vinho encontrado");
        setPage(2);
      }
      setItems(filteredWinesByValue);
    }
    if (value === "optionE") {
      const filteredWinesByValue = allProducts.filter(
        (wine) => wine.price > 500
      );
      if (filteredWinesByValue.length === 0) {
        alert("nenhum vinho encontrado");
        setPage(2);
      }
      setItems(filteredWinesByValue);
    }
  };

  return (
    <>
      <Navbar />
      <div className="total-span-container">
        {/* <h4
          className="return"
          onClick={() => setSearchByProductName(!searchByProductName)}
        >
          Refine sua busca
        </h4> */}
        <SearchButton
          onClick={() => setSearchByProductName(!searchByProductName)}
        >
          <h4 className="return">Refine sua busca</h4>
        </SearchButton>
        {searchByProductName && (
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              filterByName(e.target.value);
            }}
          />
        )}
        <span className="total-span">{totalItems} produtos encontrados</span>
      </div>
      <Main>
        <Radio filterByValue={handleFilterByValue} />
        <Layout>
          {items.map((item) => (
            <Card key={item.id} cardData={item} />
          ))}
        </Layout>
      </Main>

      {page === 1 ? (
        <PageContainer>
          <PageButton type="button" onClick={() => setPage(page)} primary>
            {page}
          </PageButton>
          <PageButton type="button" onClick={() => setPage(page + 1)} chosen>
            {page + 1}
          </PageButton>
          <PageButton type="button" onClick={() => setPage(page + 2)}>
            {page + 2}
          </PageButton>
          <PrevNextButton type="button" onClick={() => setPage(page + 1)}>
            ... Próximo &gt;&gt;
          </PrevNextButton>
        </PageContainer>
      ) : (
        <PageContainer prev>
          <PrevNextButton type="button" onClick={() => setPage(page - 1)}>
            &lt;&lt; Anterior ...
          </PrevNextButton>
          <PageButton type="button" onClick={() => setPage(page - 1)}>
            {page - 1}
          </PageButton>
          <PageButton
            type="button"
            onClick={() => setPage(page)}
            primary
            chosen
          >
            {page}
          </PageButton>
          <PageButton type="button" onClick={() => setPage(page + 1)}>
            {page + 1}
          </PageButton>
          <PrevNextButton type="button" onClick={() => setPage(page + 1)}>
            ... Próximo &gt;&gt;
          </PrevNextButton>
        </PageContainer>
      )}
    </>
  );
}

export default Home;
