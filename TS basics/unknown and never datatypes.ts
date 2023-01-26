let userInput1:unknown;      //its better than "any" type
let userName1:string;

userInput1=5;
userInput1="Yashshree"
//userName=userInput;             //error:-Type 'unknown' is not assignable to type 'string'.
                                  //if type would be:-"any" then it would not give error

if(typeof userInput1==='string')     //this won't give error as we are checking it first
{
    userName1=userInput1
}

function generateError1(message:string,code:number):never     //never returns anything ,good in terms of good code
{
    throw{ message:message,errorCode:code }
}

generateError1("An error has occured",500)