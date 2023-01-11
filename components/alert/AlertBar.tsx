import React, { useState } from "react";

import { Alert, Button, IconButton } from "@mui/material";
import { alertOpenState } from "../../store/AlertOpen";
import { useRecoilState } from "recoil";
import * as S from "./AlertBar.styles";

function AlertBar() {
  const [alertOpen, setAlertOpen] = useRecoilState(alertOpenState);
  return (
    <div>
      <S.StyledSnackbar
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
      >
        <S.StyledAlert
          severity="info"
          icon={false}
          action={
            <S.StyledButtons>
              <S.StyledButton
                variant="contained"
                onClick={() => {
                  setAlertOpen(false);
                }}
                color="success"
                size="small"
              >
                승인
              </S.StyledButton>
              <S.StyledButton
                variant="contained"
                onClick={() => {
                  setAlertOpen(false);
                }}
                color="error"
                size="small"
              >
                거절
              </S.StyledButton>
            </S.StyledButtons>
          }
        >
          정동겸님이 방 공유를 요청했어요!
        </S.StyledAlert>
      </S.StyledSnackbar>
    </div>
  );
}

export default AlertBar;
