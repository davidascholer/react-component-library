/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostsQueryType } from "../models/JSONPlaceHolderTypes";
import postService from "../services/postService";

const apiClient = postService;

const useCustomMutation = (data: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiClient.post(data),
    // onSuccess: () => {
    // Only works with live server
    // queryClient.invalidateQueries({
    //   queryKey: ["posts"],
    // });
    // ]);
    // Handle resetting the cache locally
    onSuccess: (savedData: any) => {
      queryClient.setQueryData<PostsQueryType[]>(["posts"], (oldData) => [
        savedData,
        ...(oldData || []),
      ]);
    },
  });
};

export default useCustomMutation;
