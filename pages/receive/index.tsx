import { useRouter } from "next/router";
import { useQuery } from "react-query";
import List from "../../components/list/list";
import React from 'react';
import * as S from './receive.style'
import { ShareListType } from "../request/type";
import { getReceiveList } from "../../util/api/receive";

export default function Request(){

    const router = useRouter();

    const receiveList = useQuery('request', () => getReceiveList(), {
        enabled: router.isReady,
    })

    const [shareReceiveList, setShareReceiveList] = React.useState<ShareListType[]>([]);

    React.useEffect(()=>{
        console.log("receive: ", receiveList);

        if(receiveList.isSuccess) {
          setShareReceiveList(receiveList.data);
        }
    }, [receiveList])

    return(
        <S.RequestContainer>
            <p>받은 공유 요청 </p>
            {shareReceiveList.map((value: ShareListType, index) => {
                return <List name={value.owner.name} state={value.stat} key={index} />
            })}
        </S.RequestContainer>
    )
}