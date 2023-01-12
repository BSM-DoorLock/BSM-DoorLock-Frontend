import { Button, Dialog } from "@mui/material";
import styled from "styled-components";

export const DialogContents = styled.div`
  padding: 0 20px 20px 20px;
  text-align: center;
`;

export const StyledDialog = styled(Dialog)`
  padding: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
`;

export const StyledButton = styled(Button)`
  width: 100px;
`;
