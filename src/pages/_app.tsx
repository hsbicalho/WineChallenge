import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ProductsProvider } from "../hooks/useProducts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <Component {...pageProps} />
    </ProductsProvider>
  );
}

export default MyApp;
