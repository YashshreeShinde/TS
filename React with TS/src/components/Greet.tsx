// Use type when building applications and interfaces when building libraries

type GreetProps=
{
    name:string
    messageCount?:number            //if messageCount is passed as props then only execute this
    isLoggedIn:boolean
}


export const Greet=(props:GreetProps)=>{
    const {messageCount=0}=props
    // if messageCount props is present then set it to messageCount variable else set messageCount to 0 and then access it using ${messageCount}
    return(
        <div>
            <h2>{(props.isLoggedIn)?`Welcome ${props.name}! You have ${messageCount} messages in your Inbox`:`Everything is already read,Doing Good!`}</h2>           
            {/* When accessing the props properties when we type props. then we get the suggestion of properties due to TS.This makes things easy also avoid spelling mistakes */}
        </div>
    )
}


// export default{Greet}