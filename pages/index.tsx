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
  })

  const shareRoomQuery = useQuery("shareRoom", () => shareRoom(), {
    enabled: router.isReady,
  })

  const [myRoomInfo, setMyRoomInfo] = React.useState<RoomInfoType>(RoomInfoInit);
  const [shareRoomInfo, setShareRoomInfo] = React.useState<RoomInfoType[]>([]);

  React.useEffect(()=>{
    console.log(shareRoomQuery)

    if (myRoomQuery.isSuccess) {
      setMyRoomInfo(myRoomQuery.data);
    }

    if (shareRoomQuery.isSuccess && shareRoomQuery.data.length > 0){
      setShareRoomInfo(myRoomQuery.data);
    }
  }, [myRoomQuery, shareRoomQuery]);

  return (
    <div>
      <Header />
      <A.Section>
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
      </A.Section>
      <Footer />
    </div>
  );
}

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MyRoom = styled.div`
  padding-left: 5px;
  width: 80%;
  height: 40%;
  margin: 11% auto auto;
  p {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const ShareRoom = styled(MyRoom)`
  .title {
    position: absolute;
    display: flex;
    align-items: center;
    p {
      margin: 0;
    }
    svg {
      margin-left: 15px;
    }
  }

  .rooms {
    margin-top: 60px;
    display: flex;
    gap: 30px;
    div {
      padding-left: 12px;
      padding-right: 12px;
    }
  }

  padding-bottom: 20px;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.button`
  margin: 20px 20px 0 0;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 5px lightgray;
`;
