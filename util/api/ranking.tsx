import { instance } from "../../instance/instance";
import { getAccessToken } from "../authorization"

export const roomRanking = async () => {
    return (await instance.get('/room/ranking/room', getAccessToken())).data;
}

export const studentRanking = async () => {
    return (await instance.get('/room/ranking/student', getAccessToken())).data;
}