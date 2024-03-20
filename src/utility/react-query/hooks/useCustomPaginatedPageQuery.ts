/* 
Todo: 
Needs the pages properly invalidated (mutations?)
*/
import { useQuery } from "@tanstack/react-query";
import { PostsQueryType } from "../models/JSONPlaceHolderTypes";

import postService from "../services/postService";

const apiClient = postService;

const getPostsPaginated = async (slug: PostsQueryType, page: number) => {
  const data = await apiClient.getAll({
    params: slug,
  });
  const itemsPerPage = 3;

  if (page * itemsPerPage > data.length + itemsPerPage) {
    return [];
  }

  const filteredResult = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  return filteredResult;
};

const useCustomPaginatedPageQuery = (slug: PostsQueryType, page: number) => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getPostsPaginated(slug, page),
  });
};

export default useCustomPaginatedPageQuery;
