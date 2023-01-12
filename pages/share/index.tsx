import React from "react";
import Room from "../../components/room/Room";
import * as A from "../../styles/all";
import { useQuery } from "react-query";
import * as S from "../../styles/share/share.styles";
import { getAllRoomList } from "../../util/api/share";
import { RoomListType } from "../../types/share.type";
import { CircularProgress } from "@mui/material";
import Loading from "../../components/loading/Loading";

function Share() {
  const allRoomListQuery = useQuery("allRoomList", () => getAllRoomList());
  return (
    <A.Section>
      <A.Title>방 공유 요청</A.Title>
      {allRoomListQuery.isSuccess ? (
        <S.Rooms>
          {allRoomListQuery.data.map((item: RoomListType) => {
            return (
              <Room
                key={item.id}
                number={item.id}
                isShare
                owners={item.owners}
              />
            );
          })}
        </S.Rooms>
      ) : (
        <Loading />
      )}
    </A.Section>
  );
}

export default Share;
