import React from "react";
import { Theme } from "../";
import { Logo } from "./";

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
