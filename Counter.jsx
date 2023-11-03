import {useState} from "react"; //named import needed for not to write add and subtract again and again

export default function Counter(){

    let [count,setCount] = useState(0);
    let varCount=0;
    function handleIncrement(){
        setCount(count+1);
        varCount=varCount+1;
        console.log(varCount)
        console.log("plus has been clicked");
    }

    function handleDecrement(){
        if(count === 0){
            return;
        }
        varCount=varCount-1;
        setCount(count-1);
        console.log("minus has been clicked");
    }

    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}