import React from "react";
import Card from "./Card";
import {occupantlist} from "./occupantlist";

function createcard(contact){
  return (
    <Card 
       id ={contact.id} 
       key= {contact.id}
       na = {contact.name}
       roll = {contact.roll} 
       room = {contact.room}/>
  );
}


function Occupants() {
  return (
    <div>
      <div className="box">
         {occupantlist.map(createcard)}
      </div>
    </div>
  );
}

export default Occupants;
