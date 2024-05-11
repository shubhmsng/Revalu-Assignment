import styled from "styled-components";

const TextInput = styled.input`
  padding: 12px 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 2px 0px #1018280d;
  outline-color: ${({ theme }) => theme.colors.blue};

  &::placeholder {
    color: ${({ theme }) => theme.colors.border};
    font-size: 14px;
  }

  &.error {
    outline-color: ${({ theme }) => theme.colors.red};
    box-shadow: 0px 0px 0px 4px ${({ theme }) => theme.colors.red2};
  }
`;

export default TextInput;
