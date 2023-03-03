import "@/styles/globals.scss";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const onRedirectCallback = (appState) => {
    // Use Next.js router to redirect to the dashboard page
    router.push(appState?.returnTo || "/dashboard");
  };

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
