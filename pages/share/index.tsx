import React from "react";
import Room from "../../components/room/Room";
import * as A from "../../styles/all";
import * as S from "./share.styles";

function Share() {
  return (
    <A.Section>
      <A.Title>방 공유 요청</A.Title>
      <S.Rooms>
        <Room number={317} name1={"이현준"} name2={"권민서"} isShare />
        <Room number={317} name1={"이현준"} name2={"권민서"} isShare />
        <Room number={317} name1={"이현준"} name2={"권민서"} isShare />
        <Room number={317} name1={"이현준"} name2={"권민서"} isShare />
        <Room number={317} name1={"이현준"} name2={"권민서"} isShare />
        <Room number={317} name1={"이현준"} name2={"권민서"} isShare />
      </S.Rooms>
    </A.Section>
  );
}

export default Share;
