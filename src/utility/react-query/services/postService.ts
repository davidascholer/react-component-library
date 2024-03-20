import { PostsType, PostsQueryType } from "../models/JSONPlaceHolderTypes";
import APIClient from "./api-client";

export default new APIClient<PostsType | PostsQueryType>("/posts");
