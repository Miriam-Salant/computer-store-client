import React, { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/login.css"

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function sendData(e) {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:1111/api/user/login",
                { name, password });
            localStorage.setItem("token", response.data)
            navigate("/");
        } catch (error) {
            console.error(error);
            alert(`User ${name} isn't exist or the password isn't correct `)
            setName("")
            setPassword("")
        }
    }

    return (
        <>
            <form onSubmit={sendData}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" required />name<br /><br />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />password<br /><br />
                <button className="submit" type="submit">login</button>
            </form>
        </>
    )

}

export default Login