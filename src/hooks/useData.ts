import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";


  interface FetchResponse<T>{
      count:number;
      results: T[];
  }

const useData = <T>(endPoint: string , requestConfig?: AxiosRequestConfig, dps?:any[])=>{
    const [data, setData] = useState<T[]>([]);
    const [errors, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
     const controller = new AbortController();
     setLoading(true)
      apiClient
        .get<FetchResponse<T>>(endPoint, { signal: controller.signal, ...requestConfig})
        .then((res) => {
          setLoading(false)
          setData(res.data.results)})
        .catch((err) => {
            if(err instanceof CanceledError) return;

            setError(err.message)
            setLoading(false)
          }
            
            );


        return ()=>controller.abort();
    }, dps ?[...dps] : []);

    return { data, errors, isLoading}
}
export default useData