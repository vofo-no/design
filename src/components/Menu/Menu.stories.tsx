import React, { useState } from "react";
import { Theme, MenuButton } from "../";
import { Menu, MenuContainer } from "./";

export default { title: "Menu" };

export const Default = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Theme>
      <MenuButton open={menu} onClick={() => setMenu(!menu)} />
      <MenuContainer>
        <Menu open={menu}>
          <a href="#">Politikk</a>
          <a href="#">Medlemmer</a>
          <a href="#">Fakta</a>
          <a href="#">Ressurser</a>
        </Menu>
        <Menu variant="top" open={menu}>
          <a href="#">English</a>
          <a href="#">Om Vofo</a>
          <a href="#">Kontakt oss</a>
        </Menu>
      </MenuContainer>
    </Theme>
  );
};
