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
    shareRequest(modalState.requestId)
  );

  const requestIdHandler = (e: React.ChangeEvent<HTMLSelectElement> ) => {
    console.log(modalState);
    const value = e.target.value;
    setIsModalOpen({
      ...modalState,
      requestId: value,
    })
  }

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
          {modalState.owners.map((value, index) => {
              if (index === 1) return `/${value.name}`;
              else return value.name;
            })}
            의 방({modalState.roomNo}호)에
            <br />누구에게 공유를 요청할까요?
            <S.StyleSelect onChange={requestIdHandler}>
              <option value={""}>선택</option>
              {modalState.owners.map((value, index)=> {
                return <option key={index} value={value.studentId}>{value.name}</option>
              })}
            </S.StyleSelect>
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
