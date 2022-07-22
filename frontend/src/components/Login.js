import React, {useState} from 'react';
import axios from 'axios';

const Login = (props) => {
    const [user, setUsername] = useState("");
    const [pass, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const submit = (e) => {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('username', e.target[0].value);
        bodyFormData.append('password', e.target[1].value);
        axios({
            method: "post",
            url: "http://localhost:5000/api/login",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then( (res)=> {
            props.setIsAuthenticated(true);
        }).catch((error)=> {
            setLoginError(true);
        });
    }
    return (
        <div className="container">
        <form onSubmit={submit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text"
                autoComplete="off"
                id = "username"
                name = "username"
                placeholder = "Enter your username here"
                onChange = {(e)=>{
                    setUsername(e.target.value)
                }}/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password"
                autoComplete="off"
                id = "password"
                name = "password"
                placeholder = "Enter your password here"
                onChange = {(e)=>{
                    setPassword(e.target.value)
                }}
                />
            </div>
            {loginError && <div id = "errorMessage" className = "generic-error">
                <p> The credentials you have entered are not valid.</p>
            </div>}
            <button type="submit">SUBMIT</button>
        </form>
        </div>
    )
}

export default Login;