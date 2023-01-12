import styled from "styled-components";
import { Switch } from "@mui/material";

export const Room = styled.div`
    position: relative;
    p{
        position: absolute;
        top: 25px;
        left: 50%;
        transform: translate(-50%);
        font-size: 18px;
    }
    transform: scale(1.5);
    margin-bottom: 10px;
`

export const SwitchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
`

export const ArrowStyle = styled.span`
    svg{
        margin: 30px 0 0 20px;
        width: 45px;
        height: 45px;
        color: black;
    }
`

export const RoomName = styled.p` 
    font-size: 40px;
    padding-top: 35px;
`

export const StateText = styled.span`
    margin: 2.5em 0 30px 0;
    font-size: 40px;
`

export const SwitchStyle = styled(Switch)`
  transform: scale(3);
`;