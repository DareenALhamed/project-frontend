import React, { useState } from "react";
import "./ProductCard.css";
import { toast } from "react-toastify";
import axios from "axios";
import SmallLoading from "./../SmallLoading/SmallLoading";

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);

  const addToCart = async (productId) => {
    const token = localStorage.getItem("userToken");
    setLoading(true);
    try {
      const { data } = await axios.post(
        `https://ecommerce-node4-five.vercel.app/cart`,
        {
          productId: productId,
          quantity: 1,
        },
        {
          headers: { authorization: `Tariq__${token}` },
        }
      );
      if (data.message == "success") {
        toast.success("product added successfully");
        // navigate('/cart')
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="product-card">
        <img src={product.mainImage.secure_url} alt={product.name} />

        <div className="product-content">
          <h3 title={product.name}>{product.name}</h3>
          <div className="price">
            {product.discount > 0 && (
              <p className="old-price">${product.price}</p>
            )}
            <p className="original-price">${product.finalPrice}</p>
          </div>
        </div>

        <div className="product-options">
          <button onClick={() => addToCart(product._id)}>
            {loading ? <SmallLoading /> : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
