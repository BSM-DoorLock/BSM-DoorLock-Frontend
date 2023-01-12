import React, { useEffect, useState } from "react";
import * as S from "./Footer.styles";
import Image from "next/image";
import { BsDoorClosed } from "react-icons/bs";
import {
  NotificationsNone,
  AssignmentOutlined,
  HourglassTopOutlined,
  SendToMobileOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
function Footer() {
  const [value, setValue] = useState(0);
  const router = useRouter();
  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setValue(0);
        break;
      case "/share":
        setValue(1);
        break;
      case "/history":
        setValue(4);
        break;
    }
  }, []);
  return (
    <S.Footer
      value={value}
      onChange={(event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        switch (newValue) {
          case 0:
            router.push("/");
            break;
          case 1:
            router.push("/share");
            break;
          case 4:
            router.push("/history");
            break;
        }
      }}
    >
      <S.Tab label="내 방" value={0} icon={<BsDoorClosed size={20} />} />
      <S.Tab label="방 공유 요청" value={1} icon={<SendToMobileOutlined />} />
      <S.Tab label="요청 목록" value={2} icon={<NotificationsNone />} />
      <S.Tab label="대기 목록" value={3} icon={<HourglassTopOutlined />} />
      <S.Tab label="기록 보기" value={4} icon={<AssignmentOutlined />} />
    </S.Footer>
  );
}

export default Footer;
