import { useQuery } from "@tanstack/react-query";
import postService from "../services/postService";

const apiClient = postService;

const useCustomQueryOne = (id: number) =>
  useQuery({
    queryKey: ["posts", id],
    queryFn: () => apiClient.get(id),
    enabled: typeof id === "number",
  });

export default useCustomQueryOne;
