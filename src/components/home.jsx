import AddTransaction from "./add"
import DisplayTransaction from "./displayTransaction"
import React from "react"
import { useNavigate } from "react-router-dom"

const Home = (props) =>{
    const navigate = useNavigate()

    return  <div>
    <DisplayTransaction transaction={props.transaction}/>
    <AddTransaction add={props.add}/>
    <button onClick={() => navigate("/login")}>Go to login</button>
</div>
}

export default Home