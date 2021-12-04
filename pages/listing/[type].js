import React from "react";
import Header from "../../components/shared/header";
import Listing from "../../components/shared/listing";
import Footer from "../../components/shared/footers";

function ListingType(props) {
  // console.log(props);
  return (
    <div>
      <Header />
      <Listing listing={props.props.data.ListingType} />
      <Footer />
    </div>
  );
}

ListingType.getInitialProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/listing/` + context.query.type
  );
  const data = await res.json();
  return {
    props: { data },
  };
};

export default ListingType;
