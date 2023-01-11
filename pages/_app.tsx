import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globals";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import AlertBar from "../components/alert/AlertBar";

export default function App({ Component, pageProps }: AppProps) {


  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AlertBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
