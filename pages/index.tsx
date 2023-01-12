import Room from "../components/room/Room";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import * as S from "./main.styles";
import * as A from "../styles/all";
import Header from "../components/header/Header";
import { AddToPhotos, SearchOff } from "@mui/icons-material";
import { useQuery } from "react-query";
import { myRoom, shareRoom } from "../util/api/main";
import { useRouter } from "next/router";
import React from "react";
import { RoomInfoType } from "./type";
import { RoomInfoInit } from "./init";

export default function Home() {
  const router = useRouter();
  const myRoomQuery = useQuery("myRoom", () => myRoom(), {
    enabled: router.isReady,
  });

  const shareRoomQuery = useQuery("shareRoom", () => shareRoom(), {
    enabled: router.isReady,
  });

  const [myRoomInfo, setMyRoomInfo] =
    React.useState<RoomInfoType>(RoomInfoInit);
  const [shareRoomInfo, setShareRoomInfo] = React.useState<RoomInfoType[]>([]);

  React.useEffect(() => {
    console.log(shareRoomQuery);

    if (myRoomQuery.isSuccess) {
      setMyRoomInfo(myRoomQuery.data);
    }

    if (shareRoomQuery.isSuccess && shareRoomQuery.data.length > 0) {
      setShareRoomInfo(myRoomQuery.data);
    }
  }, [myRoomQuery, shareRoomQuery]);

  return (
    <div>
      {/* <S.Flex>
        <S.Button>로그인</S.Button>
      </S.Flex> */}
      {/* <Header /> */}
      <S.MainSection>
        <S.MyRoom>
          <S.Title>
            <p>내 방</p>
          </S.Title>
          {!myRoomQuery.isLoading && (
            <Room
              number={myRoomInfo.id}
              owner1={myRoomInfo.owners[0].name}
              owner2={myRoomInfo.owners[1].name}                                                                
            />
          )}
        </S.MyRoom>
        <S.ShareRoom>
          <S.Title>
            <p>공유된 방</p>
            <AddToPhotos />
          </S.Title>
          <div className="rooms">
            {!shareRoomQuery.isLoading && shareRoomInfo.length > 0 ? (
              shareRoomInfo.map((value: RoomInfoType, index) => {
                return (
                  <Room
                    number={value.id}
                    owner1={value.owners[0].name}
                    owner2={value.owners[1].name}
                    key={index}
                  />
                );
              })
            ) : (
              <S.Empty>
                <SearchOff />
                <p>공유된 방이 없습니다</p>
              </S.Empty>
            )}
          </div>
        </S.ShareRoom>
      </S.MainSection>
    </div>
  );
}
