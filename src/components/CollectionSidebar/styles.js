import { Typography } from "@mui/material";
import styled from "styled-components";

export const CollectionSidebarContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px;
  min-width: 252px;
  height: 100%;
  max-height: calc(100vh - 155px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  flex-grow: 1;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1.33px 2.67px 13.33px 0px #0000001a;
`;

export const CollectionSidebarNameContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  width: calc(100% - 25px);
`;

export const CollectionSidebarItem = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const CollectionSidebarItemName = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
`;
