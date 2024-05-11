import { useState } from "react";
import {
  HeaderContainer,
  LinkContainer,
  Logo,
  MenuButtonContainer,
  NavItem,
  Navbar,
} from "./styles";
import logo from "assets/logo.svg";
import Avatar from "assets/Avatar.svg";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu } from "@mui/material";

function Header() {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const activePage = useLocation().pathname;

  const navigation = (
    <>
      <LinkContainer to="/materials">
        <NavItem className={activePage === "/materials" && "active"}>
          Materials
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/elements">
        <NavItem className={activePage === "/elements" && "active"}>
          Elements
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/projects">
        <NavItem className={activePage === "/projects" && "active"}>
          Projects
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/manufacturers">
        <NavItem className={activePage === "/manufacturers" && "active"}>
          Manufacturers
        </NavItem>
      </LinkContainer>
      <LinkContainer to="/collections">
        <NavItem
          className={["/collections", "/"].includes(activePage) && "active"}
        >
          Collections
        </NavItem>
      </LinkContainer>
    </>
  );

  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
      <Navbar>{navigation}</Navbar>
      <img src={Avatar} alt="user-avatar" />

      <MenuButtonContainer>
        <IconButton onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClick={() => setMenuAnchor(null)}
          onClose={() => setMenuAnchor(null)}
          slotProps={{
            paper: {
              sx: {
                "& .MuiList-root": {
                  padding: "8px",
                },
              },
            },
          }}
        >
          <div>{navigation}</div>
        </Menu>
      </MenuButtonContainer>
    </HeaderContainer>
  );
}
export default Header;
