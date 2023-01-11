import Head from "next/head";
import Image from "next/image";
import { alertOpenState } from "../store/AlertOpen";
import { useRecoilState } from "recoil";
import Room from "../components/room/Room";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import * as S from "./main.styles";
import * as A from "../styles/all";
import Header from "../components/header/Header";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

export default function Home() {
  const [alertOpen, setAlertOpen] = useRecoilState(alertOpenState);
  return (
    <div>
      {/* <S.Flex>
        <S.Button>로그인</S.Button>
      </S.Flex> */}
      <Header />
      <A.Section>
        <S.MyRoom>
          <S.Title>
            <p>내 방</p>
          </S.Title>
          <Room number={317} name1={"이현준"} name2={"권민서"} />
        </S.MyRoom>
        <S.Title>
          <p>공유된 방</p>
          <AddToPhotosIcon />
        </S.Title>
        <S.ShareRoom>
          <div className="rooms">
            <Room number={317} name1={"이현준"} name2={"권민서"} />
            <Room number={317} name1={"이현준"} name2={"권민서"} />
            <Room number={317} name1={"이현준"} name2={"권민서"} />
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
