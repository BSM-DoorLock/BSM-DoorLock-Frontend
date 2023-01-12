import React, { useEffect, useState } from "react";
import * as S from "./Footer.styles";
import Image from "next/image";
import {
  NotificationsNone,
  AssignmentOutlined,
  HourglassTopOutlined,
  SendToMobileOutlined,
  DoorBackOutlined,
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
      case "/request":
        setValue(2);
        break;
      case "/receive":
        setValue(3);
        break;
      case "/history":
        setValue(4);
        break;
    }
  }, [router.pathname]);
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
          case 2:
            router.push("/request");
            break;
          case 3:
            router.push("/receive");
            break;
          case 4:
            router.push("/history");
            break;
        }
      }}
    >
      <S.Tab  value={4} icon={<AssignmentOutlined />} />
      <S.Tab  value={0} icon={<DoorBackOutlined />} />
      <S.Tab  value={1} icon={<SendToMobileOutlined />} />
      <S.Tab  value={2} icon={<NotificationsNone />} />
      <S.Tab  value={3} icon={<HourglassTopOutlined />} />
    </S.Footer>
  );
}

export default Footer;
