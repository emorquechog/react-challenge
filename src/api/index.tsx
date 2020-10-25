import axios from "axios";
import users, { IApiUsers } from "api/users";

export const axiosWrapper = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosWrapper.interceptors.response.use((response) => {
  return response;
});

axiosWrapper.interceptors.request.use((config) => {
  //TODO: implement token authentication
  return config;
});

export interface IApiServices {
  users: IApiUsers;
}

export default {
  users,
};
