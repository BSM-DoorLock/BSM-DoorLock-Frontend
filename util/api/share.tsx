import { instance } from "../../instance/instance";
import { getAccessToken } from "../authorization";

export const getAllRoomList = async (): Promise<any> => {
  return (await instance.get("/room", getAccessToken())).data;
};
