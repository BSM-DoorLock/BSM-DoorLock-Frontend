import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globals";
import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import AlertBar from "../components/alert/AlertBar";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <AlertBar />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
