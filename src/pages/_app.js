import "@/styles/globals.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
