import React,{createContext,useReducer} from 'react'

//Initial State
const initialState={
    transactions:[
        // {id:1, text:'stocks',amount:-2000},
        // {id:2, text:'LIC',amount:-50000},
        // {id:3, text:'salary',amount:90000},
        // {id:4, text:'interest',amount:100000}
    ]
}
export const AppReducer=(state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)
            }
        
        case 'ADD_TRANSACTION' :
            return{
                ...state,
                transactions:[action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}

//create context

export const GlobalContext=createContext(initialState);

//provider component

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

    //actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(
        <GlobalContext.Provider value={{ 
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
            }}>
                {children}
        </GlobalContext.Provider>
    )
    
}