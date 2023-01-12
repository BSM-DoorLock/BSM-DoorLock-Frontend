import React from "react";
import { Button, Dialog, DialogTitle } from "@mui/material";
import { useRecoilState } from "recoil";
import { modalOpenState, requestModalOpenState } from "../../store/ModalOpen";
import * as S from "./requestModal.style";
import { useMutation } from "react-query";
import { shareRequest } from "../../util/api/share";
import { AcceptShare } from "../../util/api/accept";

function RequestModal() {
  const [requestModalState, setRequestModalState] = useRecoilState(
    requestModalOpenState
  );

  const acceptMutation = useMutation(() =>
    AcceptShare({
      shareId: requestModalState.shareId,
      stat: "GRANTED",
    })
  );
  const denyMutation = useMutation(() =>
    AcceptShare({
      shareId: requestModalState.shareId,
      stat: "DENIED",
    })
  );

  console.log(requestModalState);
  return (
    <S.StyledDialog
      open={requestModalState.isOpen}
      onClose={() =>
        setRequestModalState({
          ...requestModalState,
          isOpen: false,
        })
      }
    >
      <>
        <DialogTitle>공유 요청</DialogTitle>
        <S.DialogContents>
          {requestModalState.guestName}님의 공유 요청을 허가 하시겠어요?
        </S.DialogContents>
        <S.Buttons>
          <S.StyledButton
            variant="contained"
            color="success"
            onClick={() => {
              acceptMutation.mutate();
              setRequestModalState({
                ...requestModalState,
                isOpen: false,
              });
              location.reload();
            }}
          >
            허가
          </S.StyledButton>
          <S.StyledButton
            variant="contained"
            color="error"
            onClick={() => {
              denyMutation.mutate();
              setRequestModalState({
                ...requestModalState,
                isOpen: false,
              });
              location.reload();
            }}
          >
            거절
          </S.StyledButton>
        </S.Buttons>
      </>
    </S.StyledDialog>
  );
}

export default RequestModal;
