/* eslint-disable @typescript-eslint/no-unused-vars */
/*
-Dependencies:
  @yarn add @tanstack/react-query
  @yarn add @tanstack/react-query-devtools
-Packages:
  @types/react-query
  react-query

-Todo:
 
*/

/*
  useQuery return types
  {
    status: "loading" | "error" | "success";
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    isLoadingError: boolean;
    isRefetchError: boolean;
    data: TData;
    dataUpdatedAt: number;
    error: null | TError;
    errorUpdatedAt: number;
    isStale: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    fetchStatus: FetchStatus;
    // Is true whenever the queryFn is executing, which includes initial loading as well as background refetches.
    fetching: boolean;
    // The query wanted to fetch, but has been paused.
    paused: boolean;
    // The query is not fetching.
    idle: boolean;
    isFetching: boolean;
    isPaused: boolean;
    isRefetching: boolean;
    isInitialLoading: boolean;
    failureCount: number;
    failureReason: null | TError;
    errorUpdateCount: number;
    refetch: (options: { throwOnError: boolean, cancelRefetch: boolean }) => Promise<UseQueryResult>;
    cancelRefetch?: boolean;
    remove: () => void;
  }*/

import React from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import useCustomQuery from "./hooks/useCustomQuery";
import useCustomQueryOne from "./hooks/useCustomQueryOne";
import useCustomPaginatedPageQuery from "./hooks/useCustomPaginatedPageQuery";
import useCustomPaginatedInfiniteMoreQuery from "./hooks/useCustomPaginatedInfiniteMoreQuery";
import { PostsType } from "./models/JSONPlaceHolderTypes";
import useCustomMutation from "./hooks/useCustomMutation";

/* queryKey
/posts -> key: ["posts"]
/posts/1 -> key: ["posts", 1]
/comments?postId=1 -> key: ["posts", { postId: 1 }]
/posts/1/comments -> key: ["posts", 1, "comments"]
/posts/1/comments/1 -> key: ["posts", 1, "comments", 1]
*/

const CustomContent: React.FC = () => {
  const customQuery = useCustomQuery({ userId: 2 });
  if (customQuery.isError)
    return <div>error: {JSON.stringify(customQuery.error)}</div>;
  if (customQuery.isLoading) return <div>loading</div>;

  return (
    <div>
      <h1>Custom Posts</h1>
      <h4>Get with user id: 2</h4>
      {customQuery.data?.map((post: PostsType) => (
        <ul key={post.id}>
          <li>id: {post.id}</li>
          <li>title: {post.title}</li>
          <li>userId: {post.userId}</li>
          <li>body: {post.body}</li>
        </ul>
      ))}
    </div>
  );
};

const CustomOneContent: React.FC = () => {
  const customQueryOne = useCustomQueryOne(2);
  if (customQueryOne.isError)
    return <div>error: {JSON.stringify(customQueryOne.error)}</div>;
  if (customQueryOne.isLoading) return <div>loading</div>;

  return (
    <div>
      <h1>One Post</h1>
      <h4>Get with id (primary key)</h4>
      <ul key={customQueryOne.data?.id}>
        <li>id: {customQueryOne.data?.id}</li>
        <li>title: {customQueryOne.data?.title}</li>
        <li>userId: {customQueryOne.data?.userId}</li>
        <li>body: {customQueryOne.data?.body}</li>
      </ul>
    </div>
  );
};

const CustomPaginationPageContent: React.FC = () => {
  const [page, setPage] = React.useState(1);

  const customPaginatedQuery = useCustomPaginatedPageQuery({ userId: 3 }, page);
  if (customPaginatedQuery.isError)
    return <div>error: {JSON.stringify(customPaginatedQuery.error)}</div>;
  if (customPaginatedQuery.isLoading) return <div>loading</div>;

  return (
    <div>
      <h1>Paginated Pages Posts</h1>
      {customPaginatedQuery.data?.map((post: PostsType) => (
        <ul key={post.id}>
          <li>id: {post.id}</li>
          <li>title: {post.title}</li>
          <li>userId: {post.userId}</li>
          <li>body: {post.body}</li>
        </ul>
      ))}
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

const CustomPaginatedMoreInfiniteQuery: React.FC = () => {
  const pageSize = 3;
  const userId = 2;

  const customPaginatedMoreQuery = useCustomPaginatedInfiniteMoreQuery({
    pageSize,
    userId,
  });

  if (customPaginatedMoreQuery.isError)
    return <div>error: {JSON.stringify(customPaginatedMoreQuery.error)}</div>;
  if (customPaginatedMoreQuery.isLoading) return <div>loading</div>;

  return (
    <div>
      <h1>Paginated More Posts</h1>
      <h4>Get with user id:2 and page size: 3</h4>
      {customPaginatedMoreQuery.data?.pages?.map((page: any, i: number) => (
        <React.Fragment key={i}>
          {page.map((post: PostsType) => (
            <ul key={post.id}>
              <li>id: {post.id}</li>
              <li>title: {post.title}</li>
              <li>userId: {post.userId}</li>
              <li>body: {post.body}</li>
            </ul>
          ))}
        </React.Fragment>
      ))}
      <div>
        <button
          onClick={() => customPaginatedMoreQuery.fetchNextPage()}
          disabled={
            customPaginatedMoreQuery.isFetchingNextPage ||
            customPaginatedMoreQuery.hasNextPage === false
          }
        >
          {customPaginatedMoreQuery.isFetchingNextPage
            ? "Loading more..."
            : "More"}
        </button>
      </div>
    </div>
  );
};

const CustomMutationQuery: React.FC = () => {
  const customMutation = useCustomMutation({
    body: "new body",
    title: "new title",
    userId: 2,
  });

  const customQuery = useCustomQuery({ userId: 2 });
  if (customQuery.isError)
    return <div>error: {JSON.stringify(customQuery.error)}</div>;
  if (customQuery.isLoading) return <div>loading</div>;

  return (
    <div>
      <h1>Mutate data</h1>
      <h4>Change id 11 body to "new body"</h4>
      <div>
        {customQuery.data?.map((post: PostsType) => (
          <ul key={post.id}>
            <li>id: {post.id}</li>
            <li>title: {post.title}</li>
            <li>userId: {post.userId}</li>
            <li>body: {post.body}</li>
          </ul>
        ))}
      </div>

      <div>
        <button onClick={() => customMutation.mutate()} disabled={false}>
          mutate
        </button>
      </div>
      <div style={{ marginTop: "500px" }} />
    </div>
  );
};

const Example: React.FC = () => {
  return (
    <ReactQueryProvider>
      {/* Note: Calling multiple useQuery within the same component will use cached values of previous calls. */}
      {/* <CustomContent />
      <CustomOneContent />
      <CustomPaginatedMoreInfiniteQuery /> */}
      <CustomMutationQuery />
    </ReactQueryProvider>
  );
};

export default Example;
