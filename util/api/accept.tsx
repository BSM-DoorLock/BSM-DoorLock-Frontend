import { instance } from "../../instance/instance";
import { getAccessToken } from "../authorization";

export const AcceptShare = async ({
  shareId,
  stat,
}: {
  shareId: number;
  stat: string;
}): Promise<any> => {
  return (
    await instance.post(
      "/room/share/accept",
      { shareId: shareId, stat: stat },
      getAccessToken()
    )
  ).data;
};
