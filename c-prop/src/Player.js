import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card  } from 'react-bootstrap';


const Player = ({ name, team, Nationality, JerseyNumber, age, imageUrl }) => (
   
  <Card style={{ width: '21rem' }}>
      <Card.Img variant="top"  height="60%" src={imageUrl}/>
      <Card.Body>
        <h4>{name}</h4>
        <h6> Team : {team}</h6>
        <h6> Nationality : {Nationality}</h6>         
        <h6> Number : {JerseyNumber}</h6>
        <h6> Age : {age}</h6>

               
      </Card.Body>
    </Card>
  
  );

  Player.defaultProps = {
    name: "No Player",
    team: "Unknown",
    Nationality: "Unknown",
    JerseyNumber: "Unknown",
    age: "Unknown",
    imageUrl: "https://www.1min30.com/wp-content/uploads/2019/03/Club-Africain.jpg",
  };
  
 
  

export default Player;