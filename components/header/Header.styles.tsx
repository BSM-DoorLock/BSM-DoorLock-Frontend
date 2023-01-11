import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

export const Header = styled(AppBar)`
  background-color: black;
  position: fixed;
  top: 0;
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

// export const Login = styled.a`
//   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
//   font-weight: 500;
//   color: white;
// `;

export const Login = styled(Button)`
  color: white;
  &:visited {
    color: white;
  }
`;
