import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/form.css"

function Register() {
    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    async function sendData(e) {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:1111/api/user/register",
                { name, userId, password, email, phone });
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <form onSubmit={sendData}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" required />name<br /><br />
                <input value={userId} onChange={(e) => setUserId(e.target.value)} type="text" required />identity<br /><br />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />password<br /><br />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />email<br /><br />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" />phone<br /><br />
                <button className="submit" type="submit">register</button>
            </form>
        </>
    )

}

export default Register;
