import React, { useState } from "react";
import { MenuButton } from "../";
import { Box } from "../Box";
import { Menu, MenuContainer } from "./";

export default { title: "Menu" };

export const Default = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Box variant="light">
      <MenuButton open={menu} onClick={() => setMenu(!menu)} />
      <MenuContainer open={menu}>
        <Menu>
          <a href="#">Politikk</a>
          <a href="#">Medlemmer</a>
          <a href="#">Fakta</a>
          <a href="#">Ressurser</a>
        </Menu>
        <Menu variant="top">
          <a href="#">English</a>
          <a href="#">Om Vofo</a>
          <a href="#">Kontakt oss</a>
        </Menu>
      </MenuContainer>
    </Box>
  );
};
