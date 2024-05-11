import { Button } from "@mui/material";
import styled from "styled-components";

export const DeleteModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 32.36%;
  border-radius: 12px;
  padding: 24px;
  gap: 48px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  left: 33.82%;
  top: calc(50% - 131px);
  box-shadow: 0px 4px 20px 0px #00000026;

  @media (max-width: 768px) {
    width: 78%;
    left: 5%;
  }
`;

export const DeleteCollectionButton = styled(Button)`
  background-color: ${({ theme, bgcolor }) =>
    bgcolor ?? theme.colors.darkBlue} !important;
  color: ${({ theme, textcolor }) =>
    textcolor ?? theme.colors.white} !important;
  border-radius: 10px !important;
  padding: 16px 10px !important;
  font-size: 13px !important;
  text-transform: capitalize !important;

  &:hover {
    background-color: ${({ theme, bgcolor }) =>
      bgcolor ? theme.colors.lightGrey : theme.colors.blue} !important;
`;
