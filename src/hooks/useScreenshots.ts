import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";



const useScreenShots =(gameId:number) => {
    const apiclient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`)
   return useQuery({
    queryKey:['screenshot', gameId],
    queryFn: apiclient.getAll
})}

export default useScreenShots;