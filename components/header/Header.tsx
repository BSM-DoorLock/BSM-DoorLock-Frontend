import { Button, Toolbar } from "@mui/material";
import Link from "next/link";
import React from "react";
import * as S from "./Header.styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Header() {
  return (
    <S.Header position="static">
      <S.StyledToolbar>
        <S.StyledLink href="/">
          BSM
          <LockOutlinedIcon />
        </S.StyledLink>
        <S.Login href="https://auth.bssm.kro.kr/oauth?clientId=d22c2333&redirectURI=http://localhost:3000/oauth/bsm">
          LOGIN
        </S.Login>
      </S.StyledToolbar>
    </S.Header>
  );
}

export default Header;
