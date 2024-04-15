import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/productdetail/${productId}`
        );
        console.log(response.data.product);
        setProduct(response.data);
      } catch (error) {}
    };
    fetchProduct();
  }, [productId]);
  console.log(product);
  return <>
    
  </>;
};

export default ProductDetail;
