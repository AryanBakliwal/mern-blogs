import { useState } from "react";
require('dotenv').config();

export default function RegisterPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    async function register(e) {
        e.preventDefault();
        const response = await fetch(process.env.REACT_APP_SERVER+"register", {
            method: 'POST',
            body: JSON.stringify({name, email, username, password}),
            headers: {'Content-Type': 'application/json'}
        });
        if(response.status === 200) {
            alert('Registration successful.');
        } else {
            alert('Registration failed!');
        }
    }

    return (
        <>
        <form className="register" onSubmit={register}>
        <h1>Register</h1>
            <input type="text" placeholder="Name" value={name} onChange={e => {setName(e.target.value)}}/>
            <input type="email" placeholder="Email" value={email} onChange={e => {setEmail(e.target.value)}}/>
            <input type="text" placeholder="Username" value={username} onChange={e => {setUsername(e.target.value)}}/>
            <input type="password" placeholder="Password" value={password} onChange={e => {setPassword(e.target.value)}}/>
            <button>Register</button>
        </form>
        </>
    );
}