import React, { useState } from "react";


const Count = () => {
    
    const[num, setNum] = useState(0);

    const incNum = () => {
        setNum(num+1);
    };

    const decNum = () => {
        if(num > 0){
       setNum(num-1);
        }else{
            alert('Sorry, Zero limit  Reached')
            setNum(0);
        }
    };
    
    return(
        <div>
            <div className="mainDiv">
                <div className="centerDiv">
                    <h1> {num} </h1>
                    <div className="btnDiv">
                        <button onClick={incNum}> Increment </button> 
                        <button onClick={decNum}> Decrement </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Count;