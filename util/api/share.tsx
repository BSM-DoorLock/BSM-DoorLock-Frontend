import { instance } from "../../instance/instance";
import { getAccessToken } from "../authorization";

export const getAllRoomList = async (): Promise<any> => {
  return (await instance.get("/room", getAccessToken())).data;
};

export const shareRequest = async (
  requestId: string | undefined
): Promise<any> => {
  return (
    await instance.post(
      "/room/share/ask",
      { ownerStudentId: requestId },
      getAccessToken()
    )
  ).data;
};
