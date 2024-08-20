import React from "react"
import { useNavigate, Link} from "react-router-dom"

function SignUp(){
    return(
        <>
         <h1>Sign Up</h1>
         <Link to={"/home"}>Go to Home Page</Link>
        </>
       
    )
}
export default SignUp