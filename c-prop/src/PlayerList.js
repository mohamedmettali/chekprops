import React from "react";
import playersArray from "./playersArray";
import Player from "./Player";


const PlayerList = () => (
   
    <div style= {{display:"flex", flexWrap:"wrap"}}>
      {playersArray.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
export default PlayerList;