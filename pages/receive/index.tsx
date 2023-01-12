import { useRouter } from "next/router";
import { useQuery } from "react-query";
import List from "../../components/list/list";
import React from "react";
import * as S from "./receive.style";
import { ShareListType } from "../request/type";
import { getReceiveList } from "../../util/api/receive";
import { Section, Title } from "../../styles/all";
import Loading from "../../components/loading/Loading";
import { useRecoilValue } from "recoil";
import { requestModalOpenState } from "../../store/ModalOpen";

export default function Request() {
  const router = useRouter();

  const requestModalState = useRecoilValue(requestModalOpenState);

  const receiveList = useQuery("request", () => getReceiveList(), {
    enabled: router.isReady,
  });

  const [shareReceiveList, setShareReceiveList] = React.useState<
    ShareListType[]
  >([]);

  React.useEffect(() => {
    if (receiveList.isSuccess) {
      setShareReceiveList(receiveList.data);
    }
  }, [receiveList, requestModalState]);

  console.log(shareReceiveList);

  return (
    <S.RequestContainer>
      <Section>
        <Title>받은 공유 요청 </Title>
        {receiveList.isSuccess ? (
          <>
            {shareReceiveList.reverse().map((value: ShareListType, index) => {
              return (
                <List
                  name={value.guest.name}
                  state={value.stat}
                  shareId={value.id}
                  key={index}
                  isRequest
                />
              );
            })}
          </>
        ) : (
          <Loading />
        )}
      </Section>
    </S.RequestContainer>
  );
}
