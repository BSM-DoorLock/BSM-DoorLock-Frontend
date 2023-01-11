import styled from "styled-components";
import { Switch } from "@mui/material";

export const Room = styled.div`
    position: relative;
    p{
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translate(-50%);
        font-size: 18px;
    }
`

export const SwitchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
`

export const ArrowStyle = styled.span`
    svg{
        margin: 10px 0 0 20px;
        width: 35px;
        height: 35px;
        color: black;
    }
`

export const RoomName = styled.span`
    margin-top: 10px;   
    font-size: 30px;
`

export const StateText = styled.span`
    margin: 3em 0 15px 0;
    font-size: 30px;
`

export const SwitchStyle = styled(Switch)`
  transform: scale(2);
`;