import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_DATA = [
  { id: "p1", price: 69, title: "Purse", description: "Very good purse" },
  { id: "p2", price: 19, title: "Shoes", description: "Very good Shoes" },
  { id: "p3", price: 79, title: "Shirt", description: "Very good Shirt" },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
