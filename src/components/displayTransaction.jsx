function DisplayTransaction(props){
    return(
        <div>
            <h1>History of your transactions</h1>

            {props.transaction.map((data, index)=>(
               <div key={index}>
                <div className="list-item">
                    <div><h6>{data.transactionItem}</h6></div>
                    <div><h6>{data.amount}</h6></div>
                    {data.transactionType == "Expense" ? <div className="expenseIndicator"></div>: <div className="incomeIndicator"></div>}
                    <div><h6>{data.transactionType}</h6></div>
                    <div/>
                    
                </div>

                </div>
            ))}

            <div>

            </div>
                

            </div>
    )
}
export default DisplayTransaction