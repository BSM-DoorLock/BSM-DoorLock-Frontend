import React from "react";
import { Button, Dialog, DialogTitle } from "@mui/material";
import { useRecoilState } from "recoil";
import { modalOpenState } from "../../store/ModalOpen";
import * as S from "./Modal.style";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOpenState);
  return (
    <S.StyledDialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <DialogTitle>공유 요청</DialogTitle>
      <S.DialogContents>
        이현준/권민서의 방(317호)에
        <br /> 공유를 요청할까요??
      </S.DialogContents>
      <S.Buttons>
        <S.StyledButton
          variant="contained"
          color="success"
          onClick={() => setIsModalOpen(false)}
        >
          확인
        </S.StyledButton>
        <S.StyledButton
          variant="contained"
          color="error"
          onClick={() => setIsModalOpen(false)}
        >
          취소
        </S.StyledButton>
      </S.Buttons>
    </S.StyledDialog>
  );
}

export default Modal;
