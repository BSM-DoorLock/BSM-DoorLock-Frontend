import { instance } from "../../instance/instance";
import { getRefreshToken } from "../authorization";

export const login = async (
  code: string | string[] | undefined
): Promise<any> => {
  return (
    await instance.post("/auth/oauth/bsm", null, { headers: { code: code } })
  ).data;
};

export const logout = async (): Promise<any> => {
  return (await instance.delete("/auth/logout", getRefreshToken())).data;
};
