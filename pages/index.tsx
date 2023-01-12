import Room from "../components/room/Room";
import * as S from "../styles/main/main.styles";
import { AddToPhotos, SearchOff } from "@mui/icons-material";
import { useQuery } from "react-query";
import { myRoom, shareRoom } from "../util/api/main";
import { useRouter } from "next/router";
import React from "react";
import { RoomInfoType } from "../types/main.type";
import { RoomInfoInit } from "../util/init";

export default function Home() {
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();
  const myRoomQuery = useQuery("myRoom", () => myRoom(), {
    enabled: router.isReady && localStorage.accessToken !== undefined,
  });

  const shareRoomQuery = useQuery("shareRoom", () => shareRoom(), {
    enabled: router.isReady && localStorage.accessToken !== undefined,
  });

  const [myRoomInfo, setMyRoomInfo] =
    React.useState<RoomInfoType>(RoomInfoInit);
  const [shareRoomInfo, setShareRoomInfo] = React.useState<RoomInfoType[]>([]);

  React.useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
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
          {myRoomQuery.isSuccess ? (
            <S.StyledLink href={`/switch/${myRoomInfo.id}`}>
              <Room number={myRoomInfo.id} owners={myRoomInfo.owners} />
            </S.StyledLink>
          ) : (
            <div>로그인 후 이용 가능합니다!</div>
          )}
        </S.MyRoom>
        <S.ShareRoom>
          <S.Title>
            <p>공유된 방</p>
            <AddToPhotos onClick={() => router.push('/share')} />
          </S.Title>
          <div className="rooms">
            {mounted && localStorage.accessToken ? (
              shareRoomQuery.isSuccess && shareRoomInfo.length > 0 ? (
                shareRoomInfo.map((value: RoomInfoType, index) => {
                  return (
                    <Room number={value.id} owners={value.owners} key={index} />
                  );
                })
              ) : (
                <S.Empty>
                  <SearchOff />
                  <p>공유된 방이 없습니다</p>
                </S.Empty>
              )
            ) : (
              <span>로그인 후 이용 가능합니다~</span>
            )}
          </div>
        </S.ShareRoom>
        
      </S.MainSection>
    </div>
  );
}
