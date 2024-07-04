import "@/styles/globals.css";
import type { AppProps } from "next/app";
import useLoading from "../hooks/useLoader";
import LoadingIndicator from "../components/styles/LoadingIndicator";

export default function App({ Component, pageProps }: AppProps) {
  const loading = useLoading();

  return (
    <>
        {loading && <LoadingIndicator />}
        <Component {...pageProps} />
    </>
);
}
