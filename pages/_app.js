import DefaultLayout from "../components/layouts/DefaultLayout";
import "../styles/globals.css";
import "../styles/base.css";

function MyApp({ Component, pageProps }) {
  // const { Component, pageProps } = this.props;
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout children={page} />);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
