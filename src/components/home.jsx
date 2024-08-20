import AddTransaction from "./add"
import DisplayTransaction from "./displayTransaction"

function Home(props){
    return(
        <div>
            <DisplayTransaction transaction={props.transaction}/>
            <AddTransaction add={props.add}/>
        </div>
    )
}
export default Home