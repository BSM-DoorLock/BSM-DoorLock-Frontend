import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globals";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import AlertBar from "../components/alert/AlertBar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Modal from "../components/modal/Modal";
import RequestModal from "../components/requestModal/requestModal";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <GlobalStyle />
          <AlertBar />
          <Component {...pageProps} />
          <Footer />
          <Modal />
          <RequestModal />
        </QueryClientProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
