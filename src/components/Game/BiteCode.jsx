import { useLocation } from "react-router-dom";
import KillCodeQR from "./KillCodeQR";
import keycloak from "../../keycloak/keycloak";
import KillCodeQRScanner from "./KillCodeQRScanner";
import { useGetUserIsZombie } from "../Hooks/APIPlayers";
import { useState, useEffect } from "react";

// component that checks the users currently Joined game Zombie Status then renders the QR scanner Component 
// if the user is zombie and the QR code for the user containing the bitecode instead if human.
const BiteCode = () => {
  const location = useLocation();
  const currentGameId = location.state.currentGameId;
  const { isZombie, player } = useGetUserIsZombie(
    currentGameId,
    keycloak.tokenParsed.sub
  );
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (player) {
      setShouldRender(true);
    }
  }, [player]);

  return (
    <div>
      {shouldRender ? (
        player?.id && isZombie ? (
          <KillCodeQRScanner
            gameId={location.state.currentGameId}
            playerId={player ? player.id : undefined}
          />
        ) : (
          <KillCodeQR
            gameId={location.state.currentGameId}
            playerId={player ? player.id : undefined}
          />
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default BiteCode;
