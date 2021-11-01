import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";
import useStyles from "./styles";

// const products = [
//   { id: 1, name: "shoes", description: "running shoes ", price: "$10" },
//   { id: 2, name: "shoes", description: "running shoes ", price: "$10" },
// ];

const Products = ({products}) => {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.toolbar}/>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
