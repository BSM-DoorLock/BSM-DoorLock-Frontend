import Room from "../components/room/Room";
import * as S from "../styles/main/main.styles";
import { AddToPhotos, SearchOff } from "@mui/icons-material";
import { useQuery } from "react-query";
import { myRoom, shareRoom } from "../util/api/main";
import { useRouter } from "next/router";
import React from "react";
import {
  RoomRankingType,
  RoomInfoType,
  StudentRankingType,
} from "../types/main.type";
import { RoomInfoInit } from "../util/init";
import { roomRanking, studentRanking } from "../util/api/ranking";
import RoomGraph from "../components/graph/roomGraph";
import StudentGraph from "../components/graph/studentGraph";

export default function Home() {
  const router = useRouter();

  const [mounted, setMounted] = React.useState(false);
  const [myRoomInfo, setMyRoomInfo] =
    React.useState<RoomInfoType>(RoomInfoInit);
  const [shareRoomInfo, setShareRoomInfo] = React.useState<RoomInfoType[]>([]);
  const [roomRankingInfo, setRoomRankingInfo] = React.useState<
    RoomRankingType[]
  >([]);
  const [studentRankingInfo, setStudentRankingInfo] = React.useState<
    StudentRankingType[]
  >([]);

  const myRoomQuery = useQuery("myRoom", () => myRoom(), {
    enabled: router.isReady && localStorage.accessToken !== undefined,
  });

  const shareRoomQuery = useQuery("shareRoom", () => shareRoom(), {
    enabled: router.isReady && localStorage.accessToken !== undefined,
  });

  const roomRankingQuery = useQuery("roomRanking", () => roomRanking(), {
    enabled: router.isReady && localStorage.accessToken !== undefined,
  });

  const studentRankingQuery = useQuery(
    "studentRanking",
    () => studentRanking(),
    {
      enabled: router.isReady && localStorage.accessToken !== undefined,
    }
  );

  React.useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  React.useEffect(() => {
    console.log("main: ", shareRoomQuery);

    if (myRoomQuery.isSuccess) {
      setMyRoomInfo(myRoomQuery.data);
    }
    if (shareRoomQuery.isSuccess) {
      setShareRoomInfo(shareRoomQuery.data);
      // setLen(shareRoomQuery.data.length);
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
        <S.Button>?????????</S.Button>
      </S.Flex> */}
      {/* <Header /> */}
      <S.MainSection>
        <S.MyRoom>
          <S.Title>
            <p>??? ???</p>
          </S.Title>
          {myRoomQuery.isSuccess ? (
            <S.StyledLink href={`/switch/${myRoomInfo.id}`}>
              <Room number={myRoomInfo.id} owners={myRoomInfo.owners} />
            </S.StyledLink>
          ) : (
            <div>????????? ??? ?????? ???????????????!</div>
          )}
        </S.MyRoom>
        <S.ShareRoom>
          <S.Title>
            <p>????????? ???</p>
            <AddToPhotos onClick={() => router.push("/share")} />
          </S.Title>
          <div className="rooms">
            {mounted && localStorage.accessToken ? (
              shareRoomQuery.isSuccess && shareRoomQuery.data ? (
                shareRoomQuery.data.map((value: RoomInfoType) => {
                  return (
                    <S.StyledLink
                      href={{
                        pathname: `/switch/${value.id}`,
                        query: {
                          owner:
                            value.owners[0].name +
                            (value.owners[1] ? value.owners[1].name : ""),
                        },
                      }}
                      // as={`/switch/${value.id}`}
                      key={value.id}
                    >
                      <Room number={value.id} owners={value.owners} />
                    </S.StyledLink>
                  );
                })
              ) : (
                <S.Empty>
                  <SearchOff />
                  <p>????????? ?????? ????????????</p>
                </S.Empty>
              )
            ) : (
              <span>????????? ??? ?????? ???????????????~</span>
            )}
          </div>
        </S.ShareRoom>
        <S.GraphContainer>
          <S.GraphText>????????? ??? ??????</S.GraphText>
          {roomRankingInfo.length > 0 && <RoomGraph data={roomRankingInfo} />}
          <S.GraphText>????????? ?????? ??????</S.GraphText>
          {studentRankingInfo.length > 0 && (
            <StudentGraph data={studentRankingInfo} />
          )}
        </S.GraphContainer>
      </S.MainSection>
    </div>
  );
}
