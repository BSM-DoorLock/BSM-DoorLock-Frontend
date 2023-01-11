import { Switch } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from "react";
import Image from "next/image";
import * as S from './style'
import Link from "next/link";

export default function ToggleDoor(){

    const [state, setState] = React.useState<boolean>(false);
    const [text, setText] = React.useState<string>('CLOSE');

    const handleSwitch = () => {
      if (state) setText("CLOSE");
      else setText("OPEN");
      setState((prev) => !prev);
    }

    return (
      <div>
        <S.ArrowStyle>
            <Link href={"/"}>
              <ArrowBackIcon />
            </Link>
        </S.ArrowStyle>
        <S.SwitchContainer>
            <S.Room>
              <Image src="/image/door.svg" width={150} height={150} alt="door" />
              <p>317호</p>
            </S.Room>
            <S.RoomName>내 방</S.RoomName>
            <S.StateText>{text}</S.StateText>
            <S.SwitchStyle size={"medium"} color={"primary"} checked={state} onChange={handleSwitch} />
        </S.SwitchContainer>
      </div>
    );                                                                      
}

