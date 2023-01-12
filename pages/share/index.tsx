import React from "react";
import Room from "../../components/room/Room";
import * as A from "../../styles/all";
import { useQuery } from "react-query";
import * as S from "./share.styles";
import { getAllRoomList } from "../../util/api/share";
import { RoomListType } from "./share.type";

function Share() {
  const allRoomListQuery = useQuery("allRoomList", () => getAllRoomList());
  return (
    <A.Section>
      <A.Title>방 공유 요청</A.Title>
      <S.Rooms>
        {allRoomListQuery.isSuccess &&
          allRoomListQuery.data.map((item: RoomListType) => {
            return (
              <Room
                key={item.id}
                number={item.id}
                isShare
                owners={item.owners}
                ownerId={item.owners[0] && item.owners[0].studentId}
              />
            );
          })}
      </S.Rooms>
    </A.Section>
  );
}

export default Share;
