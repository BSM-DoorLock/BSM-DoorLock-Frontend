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
  /* .MuiSwitch-root.MuiSwitch-sizeMedium.css-julti5-MuiSwitch-root {
    width: 100px;
    height: 50px;
    display: flex;
  }
  .MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorSuccess.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorSuccess.css-1xvpzln-MuiButtonBase-root-MuiSwitch-switchBase {
    
  } */
  .MuiSwitch-root.MuiSwitch-sizeMedium.css-julti5-MuiSwitch-root{
    transform: scale(2);
  }
`;