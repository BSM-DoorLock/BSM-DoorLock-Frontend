import { useRouter } from "next/router";
import { useQuery } from "react-query";
import List from "../../components/list/list";
import { getRequestList } from "../../util/api/request";
import { ShareListType } from "./type";
import React from 'react';
import * as S from './request.style'

export default function Request(){

    const router = useRouter();

    const requestList = useQuery('request', () => getRequestList(), {
        enabled: router.isReady,
    })

    const [shareRequestList, setShareRequestList] = React.useState<ShareListType[]>([]);

    React.useEffect(()=>{
        console.log("request: ", requestList);

        if(requestList.isSuccess) {
          setShareRequestList(requestList.data);
        }
    }, [requestList])

    return(
        <S.RequestContainer>
            <p>공유 요청 기록</p>
            {shareRequestList.map((value: ShareListType, index) => {
                return <List name={value.owner.name} state={value.stat} key={index} />
            })}
        </S.RequestContainer>
    )
}