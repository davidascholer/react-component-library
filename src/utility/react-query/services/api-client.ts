import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  // If key is required
  // params: {
  //   key: "",
  // },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T[]>(this.endpoint, config).then((res) => {
      return res.data;
    });
  };

  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => {
      return res.data;
    });
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => {
      return res.data;
    });
  };
}

export default APIClient;
