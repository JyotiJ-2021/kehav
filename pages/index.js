import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/shared/header";
import HomeLayout from "../components/shared/home";
import Footer from "../components/shared/footers";
export default function Home(props) {
  // console.log(props);
  return (
    <div className="ksamvad grayBg">
      <Header />
      <HomeLayout data={props.props} />

      <Footer />
    </div>
  );
}

Home.getInitialProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/");
  const json = await res.json();
  return { props: json };
};
