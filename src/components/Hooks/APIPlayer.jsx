import { getPlayer } from "../../api/PlayerAPI";
import { getPlayers } from "../../api/PlayerAPI";

export const useGetAllPlayersAPI = () => {
    const [maps, setMaps] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      async function fetchMaps() {
        const [error, response] = await getMaps();
        
        if (error !== null) {
          alert(error);
        } else if (response !== undefined) {
          setMaps(response);
          
        }
  
        setIsLoading(false);
      }
      
      fetchMaps();
    }, []);
    return { maps, isLoading };
  };