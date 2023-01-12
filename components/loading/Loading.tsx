import { CircularProgress } from "@mui/material";
import React from "react";
import * as S from "./Loading.style";

function Loading() {
  return (
    <S.LoadingContainer>
      <CircularProgress />
    </S.LoadingContainer>
  );
}

export default Loading;
