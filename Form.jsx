import {useState} from "react"

export default function Form(){
    let [firstName,setName]=useState("");
    let [LastName,resetName]=useState("");
    let handleFirstNameChange=(e)=>{
        //console.log(e); // native event
       // console.log(e.target.value);
        setName(e.target.value);
       
    }
    let handleLastNameChange=(e)=>{
        //console.log(e); // native event
        //console.log(e.target.value);
        resetName(e.target.value);
       
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(firstName,LastName);
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>FirstName: </label>
                <input onChange={handleFirstNameChange} type="text" value={firstName}></input>
                <label>LastName: </label>
                <input onChange={handleLastNameChange} type="text" value={LastName}></input>
                <button>submit </button>
            </form>
        </div>
    )
    
} 