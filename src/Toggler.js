import React,{useState} from "react";
import useToggle from "./UseToggle";

function Toggler(){

const[isHappy,setIsHappy] = useToggle(true);
return(
    <div>
        <h1 onClick={setIsHappy} >{isHappy ? " :D " : " :( "}</h1>
    </div>
);
}

export default Toggler;