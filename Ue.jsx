import {useEffect,useState} from "react"

export default function Ue(){
    let [count,setCount]=useState(0);
    let [text,setText]=useState("");
    let [age,setAge]=useState(15);

    let handleClick=()=>{
        setCount(count+1);
    }

    let handleChange=(e)=>{
        setText(e.target.value)
    }

    let handleAge=(e)=>{
        setAge(e.target.value); 
    }
    // useEffect(()=>{
    //     //console.log("i am reven using useeffect");
    //     document.title=`value of count is${count}`
    // // },[])

     useEffect(()=>{
            console.log("running on count state change only");
            document.title=`value of count is${count}`
        },[count])//it will run in mounting and updating state but limited by using count state

    useEffect(()=>{
        console.log("running on text or age updating change")
    },[text,age])//it will run in updateing and 
    //console.log("i am reven inside component")
    return (
        <div>
             <h1>I AM {count} USEEFFECT</h1>
             <button onClick={handleClick}>Increment count</button>
             <h2>Form</h2>
            <input type="text" onChange={handleChange} value={text}/>
             <h2>{text}</h2>
             <input typr="number" onChange={handleAge} value={age}/>
        </div>
       
    )
}