import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Component/NavBar";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/productdetail/${productId}`
        );
        setProduct(response.data.product);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleCart = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`http://localhost:5000/addtocart`, {
        productId: productId,
        cart: 1,
        token,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8 ">
        {product && (
          <div className="flex justify-evenly py-8 my-8">
            <div className="max-w-md rounded-xl">
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* productdetails */}
            <div className="">
              <h2 className="text-3xl font-semibold mt-8">
                {product.productName}
              </h2>
              <p className="text-lg text-slate-300 mt-2">
                {product.productDesc}
              </p>
              <p className="text-lg text-slate-300 mt-2">
                <span className="font-semibold">Brand:</span>{" "}
                {product.productBrand}
              </p>
              <button
                className="my-8 bg-[#14628f] border-2 p-4 rounded-lg font-semibold"
                onClick={handleCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
