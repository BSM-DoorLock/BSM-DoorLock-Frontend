import { instance } from "../../instance/instance"
import { getAccessToken } from "../authorization"

export const getReceiveList = async () => {
    return (await instance.get('/room/share/receive', getAccessToken())).data;
}