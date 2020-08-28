import React from "react";
import "./occupantstyle.css";
import styled from "styled-components";

const Sty = styled.div`  

.card {
    border-radius: 25px;
    position: relative;
    padding: 10px 15px;
    background-color: #81ecec;
    margin: 50px 15px;
    height: 140px;
  
    box-shadow: 0 2px 5px #ccc;
    text-align: center;
  }
  
  .top {
    border-radius: 25px 25px 0 0;
    height: 50px;
    width: 100%;
    background-color: #00cec9;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    display: flex;
  }
  
  .name {
    font-size: 2em;
    color: #2d3436;
    display: flex;
    flex: 1;
    margin: 10% 20px 0;
  }
  
  .card img {
    margin: 30px 20px 0 0;
  }
  
  .circle-img {
    border-radius: 50%;
    border: 7px solid #fff;
    width: 120px;
    height: 120px;
  }
  
  .bottom {
    margin-top: 30px;
  }
  
  .info {
    margin: 20px 0;
    font-size: 20px;
    color: #671397;
  }
  
  .title{
    color: black;
    text-align: center;
  }
  
  .box{
    display: grid;
    grid-template-columns: repeat(5,225px);
  }

`;


const Card = (props)=>{

   return ( <Sty>
      <div className="card">
        <div className="top">
          <h2 className="title">{ props.na}</h2>
        </div>
        <div className="bottom">    
          <h1 className= "info">{props.roll}</h1>
          <h2 className= "info">{props.room}</h2>
        </div>
        </div>
    </Sty>
   );
}

export default Card;