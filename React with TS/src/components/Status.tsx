type StatusProps={
    // status:string-->We cant give type=string because then even if we pass another string as props 
    //it would still work,but we want only 3 strings to be passed as props
    status:"loading" | "success" | "error"
}

 const Status=(props:StatusProps)=>{
    let message;
    if(props.status==='loading')
    message='Loading'
    else if(props.status==='success')
    message='Success'
    else if(props.status==='error')
    message='Error'
    

    return(
        <div>
            <h2>Status:-{message}</h2>
        </div>
    )
}

export default Status