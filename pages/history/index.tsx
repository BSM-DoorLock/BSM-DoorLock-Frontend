import History from "../../components/history/history";
import * as S from "./history.style";
import * as A from "../../styles/all";
import { getHistory } from "../../util/api/history";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MyRoomLogListType } from "./type";

export default function HistoryList() {
  
  const router = useRouter();
  const myRoomLogList = useQuery("myRoomLog", () => getHistory(), {
    enabled: router.isReady,
  });

  const [logList, setLogList] = useState<MyRoomLogListType[]>([])

  useEffect(()=>{
    if(myRoomLogList.isSuccess) {
      setLogList(myRoomLogList.data);
    }
  }, [myRoomLogList])

  return (
    <div>
      <A.Section>
        <A.Title>내 방 기록</A.Title>
        {logList.map((value: MyRoomLogListType, index)=> {
          return <History name={value.user.name} type={value.accessStat} date={value.accessedAt} key={index} />
        })}
      </A.Section>
    </div>
  );
}
