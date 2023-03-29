import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import KillCodeQR from "./KillCodeQR";
import keycloak from "../../keycloak/keycloak";
import KillCodeQRScanner from "./KillCodeQRScanner";
import { useGetPlayerIsZombieAPI } from "../Hooks/APIPlayers";
import { useGetUserIsZombie } from "../Hooks/APIPlayers";
const BiteCode = () => {
    const location = useLocation();
    const currentGameId = location.state.currentGameId;
    const { isZombie, player } = useGetUserIsZombie(currentGameId,keycloak.tokenParsed.sub);
    
    
    return (
      <div>
        {player && console.log(player.id)}
        {player?.id && isZombie ? <KillCodeQRScanner gameId ={location.state.currentGameId} /> : <KillCodeQR gameId ={location.state.currentGameId} playerId={72} />}
      </div>
    );
  };
  
  export default BiteCode;