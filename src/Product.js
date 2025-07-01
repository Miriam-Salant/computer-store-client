import React, { useState, useEffect } from "react"
import axios from "axios"
import "./css/product.css"

function Product() {

    function logout() {
        if (localStorage.getItem("token") !== null) {
            localStorage.removeItem("token")
        }
    }

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

    async function addToBasket(productId) {
        try {
            const response = await axios.post("http://localhost:1111/api/basket/add", {
                product: productId
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                }
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    const canAddToBasket = (id) => {
        if (localStorage.getItem("token")) {
            addToBasket(id);
        } else {
            alert("You must be registered to add to cart");
        }
    }

    return (
        <>
            <button className="logOut" onClick={logout}>logout</button><br />
            {<div className="product-container">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <p>{product.description}</p>
                        <img src={`/pictures/${product.picture}`} alt={product.description} />
                        <h3>Price: {product.price}</h3>
                        <br />
                        <button onClick={() => canAddToBasket(product._id)}>add to basket</button>
                    </div>
                ))}
            </div>}
        </>
    );

}

export default Product
