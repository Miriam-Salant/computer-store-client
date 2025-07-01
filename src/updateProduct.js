import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function UpdateProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProduct()
    }, [])

    async function getProduct() {
        try {
            const response = await axios.get(`http://localhost:1111/api/product/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            setProduct(response.data)
        }
        catch (error) {
            console.error(error)
        }
    }

    const [description, setDescription] = useState("")
    const [company, setCompany] = useState("")
    const [picture, setPicture] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        setDescription(product.description)
        setCompany(product.company)
        setPicture(product.picture)
        setPrice(product.price)
        setCategory(product.category)
    }, [product])

    async function updateProduct() {
        try {
            const response = await axios.put(`http://localhost:1111/api/product/update/${id}`, {
                description, company, picture, price, category
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })

        }
        catch (error) {
            console.error(error)
        }
    }

    return (<>
        <form onSubmit={updateProduct}>
            <input onChange={(e) => setDescription(e.target.value)} type="text" /> description<br /><br />
            <input onChange={(e) => setCompany(e.target.value)} type="text" /> company<br /><br />
            <input onChange={(e) => setPicture(e.target.value)} type="text" /> picture<br /><br />
            <input onChange={(e) => setPrice(e.target.value)} type="text" /> price<br /><br />
            <input onChange={(e) => setCategory(e.target.value)} type="text" /> category<br /><br />
            <button className="submit" type="submit">send</button>
        </form>
    </>)
}

export default UpdateProduct;