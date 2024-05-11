import styled from "styled-components";

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: ${({ theme, bgcolor }) => bgcolor ?? theme.colors.white};
  padding: 20px;
  gap: 16px;
  min-height: 157px;
  max-height: 225px;
  overflow: auto;
`;

export default Card;
