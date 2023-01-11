import Head from "next/head";
import Image from "next/image";
import { alertOpenState } from "../store/AlertOpen";
import { useRecoilState } from "recoil";
export default function Home() {
  const [alertOpen, setAlertOpen] = useRecoilState(alertOpenState);
  return (
    <>
      <div>
        안녕세상!
        <button onClick={() => setAlertOpen((prev) => !prev)}>앙기모찌</button>
      </div>
    </>
  );
}
