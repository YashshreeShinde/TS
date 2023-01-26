let num1=document.getElementById("num1")! as HTMLInputElement;
let num2=document.getElementById("num2")! as HTMLInputElement;
let button=document.getElementById("button");


//!:-tells t that we are sure that this element exists
//as HTMLInputElement:-we are sure that it is a input element(This syntax is called typecasting)
function add(num1:number,num2:number)
{
    console.log(num1,num2)
    return num1+num2
}
if(button)
{
    button.addEventListener("click",()=>{
console.log(add(+num1.value,+num2.value))
})
}
//it would should red underline below value property because ts tells us that we are getting a element by id so this element
//may or may not have a .value property,so its indicating us to check if there is a typo or anything else
//Once we double check that we are accessing the right element and it does have value property then we will add
