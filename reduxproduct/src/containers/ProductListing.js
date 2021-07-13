import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import {setProducts} from '../redux/actions/ProductAction'

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);
    console.log("products---", products)
  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
      console.log(err);
    });
    console.log(response.data);
    dispatch(setProducts(response.data))
  };
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
