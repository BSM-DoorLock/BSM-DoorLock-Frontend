import { Button, Toolbar } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as S from "./Header.styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useQuery, useMutation } from "react-query";
import { getUser } from "../../util/api/user";
import { getLocalStorage } from "../../util/getLocalStorage";
import { logout } from "../../util/api/auth";

function Header() {
  const [mounted, setMounted] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const userQuery = useQuery("user", () => getUser(), {
    enabled: getLocalStorage() && localStorage.accessToken !== undefined,
  });
  console.log(userQuery);

  const logoutMutation = useMutation(() => logout());
  useEffect(() => {
    if (logoutMutation.isSuccess) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      location.reload();
    }
  }, [logoutMutation]);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  return (
    <S.Header position="static">
      <S.StyledToolbar>
        <S.StyledLink href="/">
          BSM
          <LockOutlinedIcon />
        </S.StyledLink>
        {userQuery.isSuccess && mounted && localStorage.accessToken ? (
          <>
            <S.Logout
              onClick={() => {
                // logoutMutation.mutate();
                setIsDropDownOpen((prev) => !prev);
              }}
            >
              {userQuery.data.name}
            </S.Logout>
            <S.StyledMenu
              open={isDropDownOpen}
              onClose={() => setIsDropDownOpen(false)}
            >
              <S.StyledMenuItem onClick={() => setIsDropDownOpen(false)}>
                <S.UserInfo href="https://auth.bssm.kro.kr/user">
                  유저 정보
                </S.UserInfo>
              </S.StyledMenuItem>
              <S.StyledMenuItem
                onClick={() => {
                  logoutMutation.mutate();
                }}
              >
                LOGOUT
              </S.StyledMenuItem>
            </S.StyledMenu>
          </>
        ) : (
          <S.Login href="https://auth.bssm.kro.kr/oauth?clientId=d22c2333&redirectURI=http://localhost:3000/oauth/bsm">
            LOGIN
          </S.Login>
        )}
      </S.StyledToolbar>
    </S.Header>
  );
}

export default Header;
