import ms from "ms";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    // initialData: {count: platforms.length, results: platforms, next: null},
    initialData: platforms,
    staleTime: ms("24"),
  });

export default usePlatforms;
