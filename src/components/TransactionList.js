import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {
   const {transactions}= useContext(GlobalContext);
//    console.log(context);
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">

                {/* <li className="minus">
                    Cash<span>-$400</span><button className="delete-btn">X</button>
                </li> */}

                {transactions.map(transaction=>(
                    <Transaction key={transaction.id} transaction={transaction} />)
                   )}
            </ul>
        </div>
    )
}
