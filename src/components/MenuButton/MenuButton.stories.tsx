import React, { useState } from "react";
import { MenuButton } from "./";

export default {
  title: "MenuButton",
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuButton open={open} onClick={() => setOpen(!open)} />
      <p>(Hidden on large screens)</p>
    </>
  );
};
