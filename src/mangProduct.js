import React, { useState, useEffect } from "react"
import axios from "axios"
import "./css/mangProduct.css"
import { useNavigate } from "react-router-dom";

function MangProduct(props) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        product()
    }, [])

    async function product() {
        try {
            const response = await axios.get("http://localhost:1111/api/product")
            setProducts(response.data)
        }
        catch (error) {
            console.error(error);
        }
    }

    async function deleteProduct(id) {
        try {
            const response = await axios.delete(`http://localhost:1111/api/product/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            product()
            alert("The product deleted successfully")
        }
        catch (error) {
            console.error(error);
        }
    }

    const navigate = useNavigate();

    return (
        <>
            <button className="button" onClick={() => navigate("/addProduct")}> add product</button>
            <div className="product-list">
                {products.map((product, index) => (
                    <div className="product-item" key={index}>
                        <p>{product.description}</p>
                        <img src={`/pictures/${product.picture}`} alt={product.description} />
                        <h3>price {product.price}</h3><br />
                        <button className="submit" onClick={() => deleteProduct(product._id)}>delete</button>
                        <button className="submit" onClick={() => navigate(`/update/${product._id}`)}>update</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MangProduct;

