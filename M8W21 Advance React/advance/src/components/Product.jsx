import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const query = useLocation();
  console.log(query);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }

  return (
    <div>
      <h1>This is a is single product: {params.id}</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
};

export default Product;
