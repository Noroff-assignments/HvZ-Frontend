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
    const playerId = 71;
    const { isZombie } = useGetUserIsZombie(currentGameId,keycloak.tokenParsed.sub);
    
    
    return (
      <div>
        {isZombie ? <KillCodeQRScanner /> : <KillCodeQR id={currentGameId} />}
      </div>
    );
  };
  
  export default BiteCode;