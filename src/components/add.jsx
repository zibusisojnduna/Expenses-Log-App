import { useState } from "react"

function AddTransaction(){
    const [transactionItem, setTransactionItem] = useState("")
    const [amount, setAmount] = useState("")
    const [transactionType, setTransactionType] = useState("")

    return(
        <div>
            <h1>Add a new transaction</h1>

            <input type="text" placeholder="Enter Amount" onChange={(event)}><br/>
            <input type="text" placeholder="Enter Amount"/>
            <br/>
            <select>
                <option>Income</option>
                <option>Expense</option>
            </select>

            <button>Add a transaction</button>
        </div>
    )
}
export default AddTransaction