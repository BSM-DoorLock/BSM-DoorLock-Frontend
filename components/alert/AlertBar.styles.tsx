import styled from "styled-components";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";

export const StyledSnackbar = styled(Snackbar)`
  /* width: calc(100% - 50px); */
  top: calc(-90% + 100px);
  @media ${({ theme }) => theme.size.mobile} {
    width: calc(100% - 18px);
    font-size: 1000px;
  }
  .MuiAlert-action {
    padding: 0;
  }
  z-index: 100000000;
`;

export const StyledAlert = styled(Alert)`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled(Button)`
  @media ${({ theme }) => theme.size.mobile} {
    min-width: 50px !important;
  }
`;
