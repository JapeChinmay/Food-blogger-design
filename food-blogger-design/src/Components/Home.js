import Header from "./Header/Header";
import LatestArticle from "./LatestArticle/LatestArticle";
import Middle from "./Middle/Middle";
import Footer from "./Footer/Footer";

const { Fragment } = require("react");

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Middle />

      <LatestArticle />

      <Footer />
    </Fragment>
  );
};

export default Home;
