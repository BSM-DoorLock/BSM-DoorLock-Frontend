import Room from "../components/room/Room";
import * as S from "../styles/main/main.styles";
import { AddToPhotos, SearchOff } from "@mui/icons-material";
import { useQuery } from "react-query";
import { myRoom, shareRoom } from "../util/api/main";
import { useRouter } from "next/router";
import React from "react";
import { RoomRankingType, RoomInfoType, StudentRankingType } from "../types/main.type";
import { RoomInfoInit } from "../util/init";
import Graph from "../components/graph/roomGraph";
import { roomRanking, studentRanking } from "../util/api/ranking";
import RoomGraph from "../components/graph/roomGraph";
import StudentGraph from "../components/graph/studentGraph";

export default function Home() {
  const router = useRouter();

  const [mounted, setMounted] = React.useState(false);
  const [myRoomInfo, setMyRoomInfo] = React.useState<RoomInfoType>(RoomInfoInit);
  const [shareRoomInfo, setShareRoomInfo] = React.useState<RoomInfoType[]>([]);
  const [graphSort, setGraphSort] = React.useState("3");
  const [roomRankingInfo, setRoomRankingInfo] = React.useState<RoomRankingType[]>([]);
  const [studentRakingInfo, setStudentRakingInfo] = React.useState<StudentRankingType[]>([]);

  const myRoomQuery = useQuery("myRoom", () => myRoom(), {
    enabled: router.isReady && localStorage.accessToken !== undefined,
  });

  const shareRoomQuery = useQuery("shareRoom", () => shareRoom(), {
    enabled: router.isReady && localStorage.accessToken !== undefined,
  });

  const roomRankingQuery = useQuery("roomRanking", () => roomRanking(), {
    enabled: router.isReady,
  })

  const studentRankingQuery = useQuery("studentRanking", () => studentRanking(), {
    enabled: router.isReady,
  })

  React.useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  React.useEffect(() => {
    if (myRoomQuery.isSuccess) {
      setMyRoomInfo(myRoomQuery.data);
    }
    if (shareRoomQuery.isSuccess && shareRoomQuery.data.length > 0) {
      setShareRoomInfo(myRoomQuery.data);
    }
    if (roomRankingQuery.isSuccess) {
      setRoomRankingInfo(roomRankingQuery.data);
    }
    if (studentRankingQuery.isSuccess) {
      setStudentRakingInfo(studentRankingQuery.data);
    }
  }, [myRoomQuery, shareRoomQuery, roomRankingQuery, studentRankingQuery]);

  const graphHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGraphSort(event.target.value);
  }
 
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
        <S.GraphContainer>
          <select onChange={graphHandler} value={graphSort}>
            <option value="3">전체</option>
            <option value="1">1학년</option>
            <option value="2">2학년</option>
          </select>
          <S.GraphText>공유된 방 비율</S.GraphText>
          <RoomGraph data={roomRankingInfo} />
          <S.GraphText>요청한 방 비율</S.GraphText>
          <StudentGraph data={studentRakingInfo} />
        </S.GraphContainer>
      </S.MainSection>
    </div>
  );
}
