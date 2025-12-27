import React, { useState } from "react";


const Forms = () => {
    const [clickCount, setClickCount] = useState<number>(0)
    const [inputValue, setInputValue]= useState<string>("")

    const handleClick = ()=>{
        setClickCount(clickCount+1)

    }

    const handelInputChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value)
    }

    return (
        <div className=" text-center">
            <p>Click number:{clickCount} </p>
                <button className=" border" onClick={handleClick}>click</button>
            <div>
                <input className="border" type="text" value={inputValue} onChange={handelInputChange}/>
                <p> <span className=" font-bold">Current input:</span> {inputValue} </p>
            </div>

        </div>
    );
};

export default Forms;