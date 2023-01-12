import { instance } from "../../instance/instance"
import { getAccessToken } from "../authorization"

export const myRoom = async (): Promise<any> => {
  return (await instance.get("/room/my", getAccessToken())).data;
}

export const shareRoom = async (): Promise<any> => {
    return (await instance.get("/room/shared", getAccessToken())).data;
}