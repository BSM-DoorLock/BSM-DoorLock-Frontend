import { instance } from "../../instance/instance"
import { getAccessToken } from "../authorization"

export const getRequestList = async () => {
    return (await instance.get('/room/share/ask', getAccessToken())).data;
}