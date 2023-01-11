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
          <p>내 방</p>
          <Room number={317} name1={"이현준"} name2={"권민서"} />
        </S.MyRoom>
        <p>공유된 방</p>
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
