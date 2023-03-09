import React from "react";
import Posts from "../components/blogContainer/Posts";
import Filters from "../components/filter/Filters";

const Home = () => {
  return (
    <section className="wrapper">
      <Filters />
      <Posts />
    </section>
  );
};

export default Home;
