import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export const Header = styled(AppBar)`
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  &:visited {
    color: white;
  }
`;

export const Login = styled.a`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  color: white;
  &:visited {
    color: white;
  }
`;

export const Logout = styled(Button)`
  color: white;
`;

export const StyledMenu = styled(Menu)`
  .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
    top: 56px !important;
    right: 0;
    left: unset !important;

    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 0px 0px 4px 4px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  color: white;
  height: 20px;
`;

export const UserInfo = styled.a`
  width: 100%;
  font-weight: normal;
  display: block;
  text-align: center;
  &:link {
    color: white;
  }
`;
