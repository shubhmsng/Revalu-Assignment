import { IconButton, Typography } from "@mui/material";
import styled from "styled-components";

export const CollectionsContainer = styled.div`
  display: flex;
  min-width: 352px;
  flex-grow: 1;
  flex-direction: column;
  flex: 5;
  gap: 20px;
`;

export const CollectionsCountText = styled(Typography)`
  color: ${({ theme }) => theme.colors.grey2} !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  text-align: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const AddCollectionButton = styled(IconButton)`
  background-color: ${({ theme }) => theme.colors.grey} !important;
  border-radius: 50% !important;
  padding: 18px !important;
`;

export const DownloadButton = styled(IconButton)`
  background-color: ${({ theme }) => theme.colors.lightBlue} !important;
  border-radius: 10px !important;
  padding: 6px 10px !important;
  color: ${({ theme }) => theme.colors.black} !important;
  gap: 4px !important;
  font-size: 13px !important;
  font-weight: 400 !important;
`;
