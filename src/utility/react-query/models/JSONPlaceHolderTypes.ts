export type PostsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type PostsQueryType = {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
};
