import { Outlet, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import React from "react"

function Login(){

const navigate = useNavigate()

    

    return(
        <div>
            <h1>Login Page</h1>

            <button onClick={() => navigate("/home")}>Go to home page.</button>

            <h2>Don't have an account? Sign Up!</h2>
            <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
    )
}
export default Login