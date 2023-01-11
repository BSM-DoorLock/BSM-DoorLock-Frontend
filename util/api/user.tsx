import { instance } from "../../instance/instance";
import { getAccessToken } from "../authorization";

export const getUser = async (): Promise<any> => {
  return (await instance.get("/user", getAccessToken())).data;
};
