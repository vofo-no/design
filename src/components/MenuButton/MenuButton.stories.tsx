import React, { useState } from "react";
import { Theme } from "../";
import { MenuButton } from "./";

export default {
  title: "MenuButton",
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <Theme>
      <MenuButton open={open} onClick={() => setOpen(!open)} />
      <p>(Hidden on large screens)</p>
    </Theme>
  );
};
