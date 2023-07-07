import { useState,useReducer,createContext} from 'react'
import './App.css'
import Action from './components/Action'
import Api from './components/Api'

const initialState = 0
const reducer =(state,action)=>{
  switch(action){
    case 'increment':
      return state+1
    case 'decrement':
      return state-1
    case 'reset':
      return initialState
    default:
      return state
  }
}
export const ActionContext = createContext();
function App() {
  const [count,dispatch] = useReducer(reducer,initialState)

  return (
    // <ActionContext.Provider value={{dispatch, count}}>
    //   <Action/>
    // </ActionContext.Provider>
    <Api/>
  );
}

export default App  
