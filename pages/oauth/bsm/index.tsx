import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { instance } from "../../../instance/instance";

export const login = async (
  code: string | string[] | undefined
): Promise<any> => {
  return (
    await instance.post("/auth/oauth/bsm", null, { headers: { code: code } })
  ).data;
};

function Oauth() {
  const router = useRouter();
  const code = router.query.code;
  console.log(router.query.code);
  const loginQuery = useQuery("login", () => login(code), {
    enabled: router.isReady,
  });
  if (loginQuery.isSuccess) {
    console.log(loginQuery);
    const { accessToken, refreshToken } = loginQuery.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    router.push("/");
  }
  return <div></div>;
}

export default Oauth;
