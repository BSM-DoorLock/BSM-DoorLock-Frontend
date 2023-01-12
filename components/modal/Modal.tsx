import React from "react";
import { Button, Dialog, DialogTitle } from "@mui/material";
import { useRecoilState } from "recoil";
import { modalOpenState } from "../../store/ModalOpen";
import * as S from "./Modal.style";
import { useMutation } from "react-query";
import { shareRequest } from "../../util/api/share";

function Modal() {
  const [modalState, setIsModalOpen] = useRecoilState(modalOpenState);
  const shareRequestMutation = useMutation(() =>
    shareRequest(modalState.ownerId)
  );
  return (
    <S.StyledDialog
      open={modalState.isOpen}
      onClose={() =>
        setIsModalOpen({
          ...modalState,
          isOpen: false,
          isEmpty: false,
        })
      }
    >
      {!modalState.isEmpty ? (
        <>
          <DialogTitle>공유 요청</DialogTitle>
          <S.DialogContents>
            {modalState.owner1}
            {modalState.owner2 && "/"}
            {modalState.owner2}의 방{`(${modalState.roomNo}호)`}
            에
            <br /> 공유를 요청할까요??
          </S.DialogContents>
          <S.Buttons>
            <S.StyledButton
              variant="contained"
              color="success"
              onClick={() => {
                shareRequestMutation.mutate();
                setIsModalOpen({
                  ...modalState,
                  isOpen: false,
                });
              }}
            >
              확인
            </S.StyledButton>
            <S.StyledButton
              variant="contained"
              color="error"
              onClick={() =>
                setIsModalOpen({
                  ...modalState,
                  isOpen: false,
                })
              }
            >
              취소
            </S.StyledButton>
          </S.Buttons>
        </>
      ) : (
        <>
          <DialogTitle>공유 요청</DialogTitle>
          <S.DialogContents>
            빈 방에는 공유 요청을 할 수 없습니다!!!
          </S.DialogContents>
          <S.Buttons>
            <S.StyledButton
              variant="contained"
              color="success"
              onClick={() =>
                setIsModalOpen({
                  ...modalState,
                  isOpen: false,
                })
              }
            >
              확인
            </S.StyledButton>
            <S.StyledButton
              variant="contained"
              color="error"
              onClick={() =>
                setIsModalOpen({
                  ...modalState,
                  isOpen: false,
                })
              }
            >
              취소
            </S.StyledButton>
          </S.Buttons>
        </>
      )}
    </S.StyledDialog>
  );
}

export default Modal;
