import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import Image from "next/image";
import * as S from "../../styles/switch/style";
import * as A from "../../styles/all";
import Link from "next/link";
import { useRouter } from "next/router";
import { switchRoom } from "../../util/api/switch";

export default function ToggleDoor() {
  const router = useRouter();
  const number: number = Number(router.query.index);
  console.log(router);
  const { owner } = router.query;
  let newOwner;
  if (typeof owner === "string") {
    if (owner.length > 3)
      newOwner = owner.slice(0, 3) + ", " + owner.slice(3, 6);
    else if(owner.length > 0) newOwner = owner;
  }
  else newOwner = "나";
  
  const [state, setState] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string>("CLOSE");

  const handleSwitch = () => {
    if (state) setText("CLOSE");
    else setText("OPEN");
    try {
      switchRoom(number, !state);
    } catch (error) {
      console.log(error);
    }
    setState((prev) => !prev);
  };

  return (
    <A.Section>
      <S.ArrowStyle>
        <Link href={"/"}>
          <ArrowBackIcon />
        </Link>
      </S.ArrowStyle>
      <S.SwitchContainer>
        <S.Room>
          <Image src="/image/door.svg" width={110} height={110} alt="door" />
          <p>{number}</p>
        </S.Room>
        <S.RoomName>{newOwner}의 방</S.RoomName>
        <S.StateText>{text}</S.StateText>
        <S.SwitchStyle
          size={"medium"}
          color={"primary"}
          checked={state}
          onChange={handleSwitch}
        />
      </S.SwitchContainer>
    </A.Section>
  );
}
