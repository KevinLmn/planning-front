import Layout from "@/components/organisms/Layout/Layout";
import { AppProps } from "next/app";
import Image from "next/image";

export default function Home({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </main>
  );
}
