import { useEffect, useState } from "react";

const UseState = () => {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null)

    useEffect(()=>{
        setUser({
            name:"Roni",
            email: "roni@gmail.com"
        })
    },[])
    return (
        <div>
            user: {user && <p>name: {user.name} </p>

            }
            <button className=" border" onClick={()=> setUser({name:"kk", email:"kk@gamil.com"})}>click</button>
        </div>
    );
};

export default UseState;