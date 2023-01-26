import React from 'react';
import {Greet} from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Button from './components/Events/ButtonClickEvent'

import {ExplicitType1} from "./components/States/ExplicitTypeSpecify"
import {ExplicitType2} from "./components/States/ExplicitTypeSpecify2"
import {ImplicitType} from "./components/States/InitialState"
import InputClickEvent from './components/Events/InputClickEvent';
import { Style } from './components/Styles';



function App() {

  const personName={
    first:"Yashshree",
    last:"Shinde"
  }


  const nameList=[
    {
      first:"kim",
      last:"Jisoo"
    },
    {
      first:"k",
      last:"Jinnie"
    },
    {
      first:"Lalisa",
      last:"Manoban"
    }
  ]
  return (
    <div className="App">
     <Greet name="Yashshree" messageCount={10} isLoggedIn={false}/>      
     {/* It would show error(Red underline) if we give value other than string to name property as we have declared name is of type string in Greet.tsx file */}

     <Person name={personName}/>

     <PersonList names={nameList}/>

     <Status status="loading"/>
      {/* Passing children props :-https://bobbyhadz.com/blog/react-type-children-has-no-properties-in-common */}
     <Heading>Placeholder string</Heading>

     <Oscar>
      <Heading>This text is from oscar</Heading>
     </Oscar>



    {/* If we dont want to pass messageCount means suppose i dont want to pass certain property but i will give error that messageCount is missing so to overcome it */}
     <Greet name="Nimish" isLoggedIn={true}/>

     <Button handleClick={(event)=>console.log("Button Clicked")}/>
     <InputClickEvent value="" handleChange={()=>console.log("hi")}/>

     <Style styles={{ border: '1px solid black', padding: '1rem' }} />

     <ExplicitType1/>
     <ExplicitType2/>
     <ImplicitType/>

     

     


    
    </div>
  );
}

export default App;
