import React, { useState } from "react";
import Header from "../../../components/shared/header";
import Details from "../../../components/shared/details";
import Footer from "../../../components/shared/footers";
function DetailType(props) {
  return (
    <div>
      <Header />
      <Details details={props.props.data} />
      <Footer />
    </div>
  );
}

DetailType.getInitialProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/` +
      context.query.id +
      "/" +
      context.query.detail_type
  );
  const data = await res.json();
  return {
    props: { data },
  };
};

export default DetailType;
