import React, { useEffect, useState } from "react";

const io = require('socket.io-client');

import { alertOpenState } from "../../store/AlertOpen";
import { useRecoilState } from "recoil";
import * as S from "./AlertBar.styles";
import { ReceiveRoomShare, RoomAccessLogType, SocketResType } from "../../types/main.type";

function AlertBar() {
  const [mounted, setMounted] = useState(false);
  const [alertOpen, setAlertOpen] = useRecoilState(alertOpenState);
  const [alertType, setAlertType] = useState<SocketResType>(SocketResType.ROOM_ACCESS);
  const [alertMsg, setAlertMsg] = useState<string>('');

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    const socket = io('https://door.bssm.kro.kr/', {
        transports: ['websocket']
    });
    
    socket.emit('student_auth', localStorage.accessToken);

    socket.on('update_door_state', (data: RoomAccessLogType) => {
      setAlertType(SocketResType.ROOM_ACCESS);
      setAlertMsg(`${data.user.name}님이 방에 출입했어요!`);
      setAlertOpen(true);
    });

    socket.on('receive_room_share', (data: ReceiveRoomShare) => {
      setAlertType(SocketResType.RECEIVE_ROOM_SHARE);
      setAlertMsg(`${data.guest.name}님이 방 공유를 요청했어요!`);
      setAlertOpen(true);
    });

    socket.on('unauthorized', () => {});

    return () => {
        socket.disconnect();
    }
  }, [mounted]);

  return (
    <div>
      <S.StyledSnackbar
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
      >
        <S.StyledAlert
          severity="info"
          icon={false}
          action={
            alertType === SocketResType.RECEIVE_ROOM_SHARE &&
            <S.StyledButtons>
              <S.StyledButton
                variant="contained"
                onClick={() => {
                  setAlertOpen(false);
                }}
                color="success"
                size="small"
              >
                승인
              </S.StyledButton>
              <S.StyledButton
                variant="contained"
                onClick={() => {
                  setAlertOpen(false);
                }}
                color="error"
                size="small"
              >
                거절
              </S.StyledButton>
            </S.StyledButtons>
          }
        >
          {alertMsg}
        </S.StyledAlert>
      </S.StyledSnackbar>
    </div>
  );
}

export default AlertBar;
