import Head from "next/head";
import Image from "next/image";
import { alertOpenState } from "../store/AlertOpen";
import { useRecoilState } from "recoil";
import Room from "../components/room/Room";
import styled from "styled-components";
export default function Home() {
  const [alertOpen, setAlertOpen] = useRecoilState(alertOpenState);
  return (
    <div>
      <Flex>
        <Button>로그인</Button>
      </Flex>
      <MyRoom>
        <p>내 방</p>
        <Room number={317} name1={"이현준"} name2={"권민서"} />
      </MyRoom>
      <ShareRoom>
        <p>공유된 방</p>
        <div className="rooms">
          <Room number={317} name1={"이현준"} name2={"권민서"} />
          <Room number={317} name1={"이현준"} name2={"권민서"} />
          <Room number={317} name1={"이현준"} name2={"권민서"} />
        </div>
      </ShareRoom>
    </div>
  );
}

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
`

const MyRoom = styled.div`
  padding-left: 5px;
  width: 80%;
  height: 40%;
  margin: 11% auto auto;
  p{
    font-size: 35px;
    margin-bottom: 20px;
  }
`;

const ShareRoom = styled(MyRoom)`
  p{
    position: fixed;
  }

  .rooms{
    margin-top: 40px;
    display: flex;
    gap: 30px;
    div{
      padding-left: 12px;
      padding-right: 12px;
    }
  }

  padding-bottom: 20px;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar{
    display: none;
  }
`

const Button = styled.button`
  margin: 20px 20px 0 0;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 5px lightgray;
`;
