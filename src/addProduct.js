import React, { useState } from "react"
import axios from "axios"

function AddProduct() {

    const [code, setCode] = useState("")
    const [description, setDescription] = useState("")
    const [company, setCompany] = useState("")
    const [picture, setPicture] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("computer")

    async function sendData(e) {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:1111/api/product/add", {
                code, description, company, picture, price, category
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }
            )
            alert("The product has been successfully added");

            setCode("");
            setDescription("");
            setCompany("");
            setPicture("");
            setPrice("");
            setCategory("computer");
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <form onSubmit={sendData}>
                <input onChange={(e) => setCode(e.target.value)} type="text" required /> code<br /><br />
                <input onChange={(e) => setDescription(e.target.value)} type="text" required /> description<br /><br />
                <input onChange={(e) => setCompany(e.target.value)} type="text" /> company<br /><br />
                <input onChange={(e) => setPicture(e.target.value)} type="text" /> picture<br /><br />
                <input onChange={(e) => setPrice(e.target.value)} type="text" required /> price<br /><br />
                <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" /> category<br /><br />
                <button className="submit" type="submit">send</button>
            </form>
        </>
    )
}

export default AddProduct
