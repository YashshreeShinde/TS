// type ButtonProps={
//     // handleClick:()=>void
//     value:string
// }

import React from "react";


//We can also use anyother word instead of props in parameters just like function parameters
// const Button=(hello:ButtonProps)=>{

//     return(
//         <div>
//             <h2>{hello.value}</h2>
//         </div>
//     )
// }

type ButtonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}
const Button=(props:ButtonProps)=>{
    return(
        <div>
            <button onClick={(event)=>props.handleClick(event,1)}>Click ME</button>
        </div>
    )
}
 export default Button;