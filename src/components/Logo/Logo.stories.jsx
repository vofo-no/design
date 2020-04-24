import React from "react";
import Theme from "../Theme";
import Logo from "./";

export default { title: "Logo" };

export const Default = () => (
  <Theme>
    <Logo />
  </Theme>
);

export const Header = () => (
  <Theme>
    <Logo variant="header" />
    <p>(Responsive)</p>
  </Theme>
);
