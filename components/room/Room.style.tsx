import Button from "@mui/material/Button";
import styled from "styled-components";

export const RoomContainer = styled(Button)`
    min-width: 200px;
    height: 220px;
    box-shadow: 0 8px 10px lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: black;

    .owners{
        margin-top: 15px;
        font-size: 18px;
    }
`

export const ShareRoomContainer = styled(RoomContainer)`
  width: unset;
  height: unset;
  padding: 10px;
`;

export const RoomInfo = styled.div`
  position: relative;
  span {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translate(-50%);
    font-size: 20px;
  }
`;
