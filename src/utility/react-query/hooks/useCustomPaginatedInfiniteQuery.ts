import { useInfiniteQuery } from "@tanstack/react-query";
import postService from "../services/postService";

const apiClient = postService;

// export default useCustomPaginatedMoreQuery;
const useCustomPaginatedMoreQuery = (slug: {
  pageSize: number;
  userId: number;
}) => {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          _start: ((pageParam as number) - 1) * slug.pageSize,
          _limit: slug.pageSize,
          ...slug,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};

export default useCustomPaginatedMoreQuery;
