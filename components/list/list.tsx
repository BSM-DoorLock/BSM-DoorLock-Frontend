import { useRecoilState } from "recoil";
import { modalOpenState, requestModalOpenState } from "../../store/ModalOpen";
import * as S from "./list.style";

export default function List({
  name,
  state,
  shareId,
  isRequest,
}: {
  name: string;
  state: string;
  shareId: number;
  isRequest?: true;
}) {
  const [requestModalState, setRequestModalState] = useRecoilState(
    requestModalOpenState
  );
  console.log(requestModalState);
  return (
    <S.ListContainer
      state={state}
      onClick={() => {
        if (isRequest && state === "WAITING") {
          setRequestModalState({
            ...requestModalState,
            isOpen: true,
            shareId: shareId,
            guestName: name,
          });
        }
      }}
    >
      <S.Text>
        {!isRequest ? (
          <>
            <p>{name}님</p>
            {state !== "WAITING" ? (
              <p>이 공유를 {state === "GRANTED" ? "허용" : "거절"}했어요!</p>
            ) : (
              <p>에게 공유를 요청했어요!</p>
            )}
          </>
        ) : (
          <>
            <p>{name}님</p>
            {state !== "WAITING" ? (
              <p>의 공유를 {state === "GRANTED" ? "허용" : "거절"}했어요!</p>
            ) : (
              <p>이 공유를 요청했어요!</p>
            )}
          </>
        )}
      </S.Text>
      {state !== "WAITING" ? (
        <p>요청 {state === "GRANTED" ? "허가" : "거부"}됨</p>
      ) : (
        <p>대기 중</p>
      )}
    </S.ListContainer>
  );
}
