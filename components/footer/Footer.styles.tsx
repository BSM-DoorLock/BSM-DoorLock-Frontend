import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import styled from "styled-components";

export const Footer = styled(BottomNavigation)`
  width: 100%;
  position: fixed;
  bottom: 0;
`;

export const Tab = styled(BottomNavigationAction)`
  .css-imwso6-MuiBottomNavigationAction-label.Mui-selected {
    font-size: 0.5rem !important;
  }
  .MuiBottomNavigationAction-iconOnly {
    font-size: 0.5rem !important;
  }
`;
