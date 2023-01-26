//any:-in any type "any" value is allowed
//Default thing in vanilla javascript
//Not good to use

//number,string,boolean

let num1=5;     //(num1:number) default behaviour as a number is assigned
let num2=10

function add(num1:number,num2:number,result:string,booleanValue:boolean)
{
    if(booleanValue)
    {
    let res=num1+num2
    console.log(result+res) 
    }
}

let result="The result is:-";
let booleanValue=true;
add(3,4,result,booleanValue)


//------------------------------------------------------------------------------------------------------------------
//Objects

//In typescript,we can have type specific objects
//TS representation of object types
let person:
{
    name:string;
    age:number
}=
{
    name:"Yashshree",
    age:22
}

console.log(person.name)

//---------------------------------------------------------------------------------------------------------------

//Array

//Any javascript array type can be flexible or strict(regarding the element type)
let person1:
{
    name:"Yashshree",
    age:22,
    hobbies:['Listening podcasts','Dancing']
} 
let favouriteActivities:string[]            //it can only consist strings
let favouriteActivities1:any[]    


//----------------------------------------------------------------------------------------------------------------

//Tuple

//Tuple:-Added by TS for fixed-length and fixed type array

//now if we want that the role array should only contain 2 elements and the 1st element would be number and 2nd number 
//should be string compulsory.

let person2:
{
    name:string;
    age:number,
    hobbies:string[],
    role:[number,string]//------------>this a tuple
}=
{
    name:"Yashshree",
    age:22,
    hobbies:['Listening podcasts','Dancing'],
    role:[2,"author"]           //this would mean that the array is of "any" type and we can also push into the array 
                                //but we dont want this behavior
} 



//----------------------------------------------------------------------------------------------------------------------

//Enum
//enum{NEW,OLD}

//Added by ts:-automatically enumerated global constant identifiers

//as const variable needs to be managed.
enum Role{ADMIN=5,READ_ONLY_USER,AUTHOR=9};
//enum are declared with start letter 'R' as capital as enum are custom type(we can have small 'r' too)
//READ_ONLY_USER will become 6 then ,if not specified then would start numbering from 0

let person3:

{
    name:"Yashshree",
    age:22,
    hobbies:['Listening podcasts','Dancing'],
    role:[2,"author"],           //this would mean that the array is of "any" type and we can also push into the array 
    roleInDatabase:Role.ADMIN                       //but we dont want this behavior
} 


//----------------------------------------------------------------------------------------------------------------------


//Union type

// The "|" or operator is a union operator
//We do this to resusability
//we  can use combine to add numbers as well as concatenate two strings
//So input could be either string or number so when using it we have to do runtime type checking(If condition) compulsory
function combine(input1:number|string,input2:number|string)
{
    let result;
    if(typeof input1==='number' && typeof input2==='number')
    {
        result=input1+input2

    }
    else
    {
        result=input1.toString()+input2.toString(); //we need to explicitly convert it to string even if it is already a string
    }                                               //as type given is number or string so it would give error if not converted
    return result;
}

const noRes=combine(3,4)
console.log(noRes);
const combineNames=combine("Hello,","Yashshree!")
console.log(combineNames)


//----------------------------------------------------------------------------------------------------------------------

//Literal types:-

function combineAges(input1:number|string,
                     input2:number|string,
                     resultConversion:'as-number'|'as-string'           //Literal type:-only these two strings are allowed
                     )
{
    let result;
    if(typeof input1==='number' && typeof input2==='number' || resultConversion==='as-number')
    {
        result=+input1+ +input2

    }
    else
    {
        result=input1.toString()+input2.toString(); //we need to explicitly convert it to string even if it is already a string
    }                                               //as type given is number or string so it would give error if not converted
    return result;
}


//now if we want that even if we pass strings,it should be converted to number and added in combine ages
const combineAge=combineAges(3,4,'as-number')
console.log(noRes);

const combinedStringAges=combineAges('3','4','as-number')
console.log(combinedStringAges)

const combineNames1=combineAges("Hello,","Yashshree!",'as-string')
console.log(combineNames)

//----------------------------------------------------------------------------------------------------------------------

//TYPE ALIAS

type Combinable=number|string;
type ConversionDescriptor='as-number' | 'as-text';

function combineAges1(input1:Combinable,
                      input2:Combinable,
                      resultConversion:ConversionDescriptor          //Literal type:-only these two strings are allowed
                      )
{
let result;
if(typeof input1==='number' && typeof input2==='number' || resultConversion==='as-number')
{
result=+input1+ +input2

}
else
{
result=input1.toString()+input2.toString(); //we need to explicitly convert it to string even if it is already a string
}                                               //as type given is number or string so it would give error if not converted
return result;
}


//now if we want that even if we pass strings,it should be converted to number and added in combine ages
const combineAge1=combineAges1(3,4,'as-number')
console.log(noRes);

const combinedStringAges1=combineAges1('3','4','as-number')
console.log(combinedStringAges1)

const combineNames2=combineAges1("Hello,","Yashshree!",'as-text')
console.log(combineNames2)

