import axios, { AxiosPromise } from "axios";
import { IUser } from "store/users/models";

export interface IApiUsers {
  getUsers: () => AxiosPromise<any>;
  getUser: (id: number) => AxiosPromise<any>;
  updateUser: (user: IUser) => AxiosPromise<any>;
  createUser: (user: IUser) => AxiosPromise<any>;
  deleteUser: (id: number) => AxiosPromise<any>;
}

export default {
  getUsers: () => axios.get("https://reqres.in/api/users"),
  getUser: (id: number) => axios.get(`https://reqres.in/api/users?id=${id}`),
  updateUser: (user: IUser) =>
    axios.put(`https://reqres.in/api/users/${user.id}`, {
      user,
    }),
  createUser: (user: IUser) =>
    axios.post(`https://reqres.in/api/users`, {
      user,
    }),
  deleteUser: (id: number) => axios.delete(`https://reqres.in/api/users/${id}`),
};
