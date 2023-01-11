import Head from "next/head";
import Image from "next/image";
import { alertOpenState } from "../store/AlertOpen";
import { useRecoilState } from "recoil";
import Room from "../components/room/Room";
export default function Home() {
  const [alertOpen, setAlertOpen] = useRecoilState(alertOpenState);
  return (
    <>
      <div>
        안녕세상!
        <Room number={317} name1={"이현준"} name2={"권민서"} />
        {/* <button onClick={() => setAlertOpen((prev) => !prev)}>앙기모찌</button> */}
      </div>
    </>
  );
}
