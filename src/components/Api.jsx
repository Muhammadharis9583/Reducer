import {useEffect, useReducer, useState} from 'react'
import axios from 'axios';
import useDocTitle from '../hooks/useDocTitle';
import useInput from '../hooks/useInput';
 const initialState = {
   loading: true,
   post: {},
   error: "",
 };
 const reducer = (state, action) => {
   switch (action.type) {
     case "FETCH_SUCCESS":
       return {
         loading: false,
         post: action.payload,
         error: "",
       };
     case "ERROR":
       return {
         loading: false,
         post: {},
         error: "Something went wrong!",
       };

     default:
       state;
   }
 };
function Api() {
  const [title, setTitle] = useState("");
  const [firstname,bindFirstName,resetForm] = useInput('')
   const [state , dispatch] = useReducer(reducer,initialState)
   useDocTitle(title)
   useEffect(()=>
   {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response)=>{
        console.log(response.data)
        setTitle(response.data.title)
        dispatch({type: 'FETCH_SUCCESS',payload: response.data})
    }).catch((error)=>{
        dispatch({type: 'ERROR'})
    })
   },[])
   const handleSubmit =(e)=>{
    e.preventDefault()
    alert(`Hello ${firstname}`)
    resetForm()
   }
  return (
    <div>{state.loading?'loading...':state.post.title}
    {state.error?state.error:null}
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input {...bindFirstName}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Api