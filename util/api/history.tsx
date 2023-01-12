import { instance } from "../../instance/instance";
import { getAccessToken } from "../authorization";

export const getHistory = async (): Promise<any> => {
    return (await instance.get("/room/my/log", getAccessToken())).data;
  }
  