import { useRouter } from "next/router";
import { useQuery } from "react-query";
import List from "../../components/list/list";
import React from "react";
import * as S from "../../styles/receive/receive.style";
import { ShareListType } from "../../types/request.type";
import { getReceiveList } from "../../util/api/receive";
import { Section, Title } from "../../styles/all";
import Loading from "../../components/loading/Loading";

export default function Request() {
  const router = useRouter();

  const receiveList = useQuery("request", () => getReceiveList(), {
    enabled: router.isReady,
  });

  const [shareReceiveList, setShareReceiveList] = React.useState<
    ShareListType[]
  >([]);

  React.useEffect(() => {
    console.log("receive: ", receiveList);

    if (receiveList.isSuccess) {
      setShareReceiveList(receiveList.data);
    }
  }, [receiveList]);

  return (
    <S.RequestContainer>
      <Section>
        <Title>받은 공유 요청 </Title>
        {receiveList.isSuccess ? (
          <>
            {shareReceiveList.map((value: ShareListType, index) => {
              return (
                <List name={value.owner.name} state={value.stat} key={index} />
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
