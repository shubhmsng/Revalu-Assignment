import styled from "styled-components";
import { Divider as Line } from "@mui/material";

const Divider = styled(Line)`
  border-color: ${({ theme }) => theme.colors.border} !important;
  margin: 6px 0 !important;
`;

export default Divider;
