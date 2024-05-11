import { Link } from "react-router-dom";
import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 36px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
  z-index: 1001;
`;

export const Logo = styled.img`
  @media (max-width: 768px) {
    margin-left: calc(50% - 15px);
  }
`;

export const Navbar = styled.nav`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuButtonContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 30px;
  }
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;
`;

export const NavItem = styled.div`
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  &.active {
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
