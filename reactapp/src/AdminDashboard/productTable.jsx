import { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard-styles/ProductTable.css";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const API_URL = "http://localhost:5000/Botiga/product/getProducts"; 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data.products); 
        setMessage(response.data.message || ""); 
      } catch (error) {
        setMessage(error.response?.data?.message || "Failed to fetch products");
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="table-container">
      {/* 🔥 Display Backend Message */}
      {message && <div className="message">{message}</div>}

      <h2 className="title">Registered Products</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Rating</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.productId} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{product.productId}</td>
              <td>{product.name}</td>
              <td>{product.rating}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
