import React from "react";
import Footer from "../footer/Footer";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <div className={classes.toolbar} />
      home
      <div className={classes.root}>
        {/*  */}

        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
//#015871
export default Home;
