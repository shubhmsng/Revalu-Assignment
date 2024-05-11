import { Button, Typography } from "@mui/material";
import styled from "styled-components";

export const AddModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.36%;
  border-radius: 12px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  left: 33.82%;
  top: calc(50% - 196px);
  box-shadow: 0px 4px 20px 0px #00000026;

  @media (max-width: 768px) {
    width: 78%;
    left: 5%;
  }
`;

export const Label = styled(Typography)`
  font-size: 14px !important;
  font-weight: 500 !important;
  ${({ required }) =>
    required &&
    `&::after {
    content: "*";
    color: red;
  }`}
`;

export const HelperText = styled(Typography)`
  font-size: 10px !important;
  font-weight: 500 !important;
  color: ${({ theme }) => theme.colors.grey2} !important;
  text-align: right !important;
`;

export const SubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.lightBlue} !important;
  color: ${({ theme }) => theme.colors.blue} !important;
  border-radius: 10px !important;
  padding: 5px 10px !important;
  font-size: 13px !important;
  text-transform: capitalize !important;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue} !important;
    color: ${({ theme }) => theme.colors.white} !important;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const CloseButton = styled(Button)`
  background-color: transparent !important;
  color: ${({ theme }) => theme.colors.black} !important;
  border-radius: 10px !important;
  padding: 5px 10px !important;
  font-size: 13px !important;
  text-transform: capitalize !important;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey} !important;
  }
`;
