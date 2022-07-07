import { createContext, useContext, useEffect, useState } from "react";
import { ItemProps } from "../utils/interfaces";

interface IProductsContextData {
  allProducts: ItemProps[];
  getProductById: (productId: number) => ItemProps;
}

interface IProductsProvider {
  children: React.ReactNode;
}

const ProductsContext = createContext<IProductsContextData>(
  {} as IProductsContextData
);

export const ProductsProvider = ({ children }: IProductsProvider) => {
  const [allProducts, setAllProducts] = useState<ItemProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://wine-back-test.herokuapp.com/products`);
      const response = await data.json();
      setAllProducts(response.items);
    };
    fetchData();
  }, []);

  const getProductById = (id: number): ItemProps => {
    const filteredProduct = allProducts.find((product) => product.id === id);
    if (filteredProduct) return filteredProduct;
    return {} as ItemProps;
  };

  const value = {
    allProducts,
    getProductById,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};
