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
      {/* <Header /> */}
      <S.MainSection>
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
      </S.MainSection>
    </div>
  );
}
