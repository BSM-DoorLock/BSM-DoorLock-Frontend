import Room from "../components/room/Room";
import * as S from "../styles/main/main.styles";
import { AddToPhotos, SearchOff } from "@mui/icons-material";
import { useQuery } from "react-query";
import { myRoom, shareRoom } from "../util/api/main";
import { useRouter } from "next/router";
import React from "react";
import { RoomRankingType, RoomInfoType, StudentRankingType } from "../types/main.type";
import { RoomInfoInit } from "../util/init";
import { roomRanking, studentRanking } from "../util/api/ranking";
import RoomGraph from "../components/graph/roomGraph";
import StudentGraph from "../components/graph/studentGraph";

export default function Home() {
  const router = useRouter();

  const [mounted, setMounted] = React.useState(false);
  const [myRoomInfo, setMyRoomInfo] = React.useState<RoomInfoType>(RoomInfoInit);
  const [shareRoomInfo, setShareRoomInfo] = React.useState<RoomInfoType[]>([]);
  const [roomRankingInfo, setRoomRankingInfo] = React.useState<RoomRankingType[]>([]);
  const [studentRankingInfo, setStudentRankingInfo] = React.useState<StudentRankingType[]>([]);

  const myRoomQuery = useQuery("myRoom", () => myRoom(), {
    enabled: router.isReady && localStorage.accessToken !== undefined,
  });

  const shareRoomQuery = useQuery("shareRoom", () => shareRoom(), {
    enabled: router.isReady && localStorage.accessToken !== undefined,
  });

  const roomRankingQuery = useQuery("roomRanking", () => roomRanking(), {
    enabled: router.isReady && localStorage.accessToken !== undefined,
  })

  const studentRankingQuery = useQuery("studentRanking", () => studentRanking(), {
    enabled: router.isReady && localStorage.accessToken !== undefined,
  })

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
    if (shareRoomQuery.isSuccess) {
      setShareRoomInfo(myRoomQuery.data);
    }

    if (roomRankingQuery.isSuccess) {
      setRoomRankingInfo(roomRankingQuery.data);
    }
    if (studentRankingQuery.isSuccess) {
      setStudentRankingInfo(studentRankingQuery.data);
    }
  }, [myRoomQuery, shareRoomQuery, roomRankingQuery, studentRankingQuery]);
 
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
            <AddToPhotos onClick={() => router.push("/share")} />
          </S.Title>
          <div className="rooms">
            {mounted && localStorage.accessToken ? (
              shareRoomInfo?.length > 0 ? (
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
        <S.GraphContainer>
          <S.GraphText>공유된 방 비율</S.GraphText>
          {roomRankingInfo.length > 0 && <RoomGraph data={roomRankingInfo} />}
          <S.GraphText>요청한 사람 비율</S.GraphText>
          {studentRankingInfo.length > 0 && <StudentGraph data={studentRankingInfo} />}
        </S.GraphContainer>
      </S.MainSection>
    </div>
  );
}
