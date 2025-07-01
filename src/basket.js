import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/basket.css"

function Basket() {

    const [basket, setbasket] = useState([])

    useEffect(() => {
        product()
    }, [])

    async function product() {
        try {
            const response = await axios.get("http://localhost:1111/api/basket/id",
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                })
            setbasket(response.data)
        }
        catch (error) {
            console.error(error)
        }
    }

    async function deleteProduct(id) {
        try {
            const response = await axios.delete(`http://localhost:1111/api/basket/delete/${id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                })
            product()
            alert("The product deleted successfully")
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1>Your Basket 🛒</h1>
            <div className="cart">
                {basket.length === 0 ? (
                    <p>Your basket is empty.</p>
                ) : (
                    basket.map((item, index) => (
                        <div key={index}>
                            {item.product ? (
                                <>
                                    <p>{item.product.description}</p>
                                    <img src={`/pictures/${item.product.picture}`} alt={item.product.description} />
                                    <h3>Price: {item.product.price}</h3>
                                    <button onClick={() => deleteProduct(item._id)}>Delete</button>
                                </>
                            ) : (
                                <p>Product details not available.</p>
                            )}
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default Basket