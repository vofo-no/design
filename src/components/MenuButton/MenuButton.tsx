import React from "react";
import styled from "@emotion/styled";
import { variant } from "styled-system";
import { Button } from "../Button";
import css from "@styled-system/css";
import theme from "../theme";

interface MenuButtonProps {
  open: boolean;
  onClick: (event: any) => void;
}

interface BarsProps {
  open?: boolean;
}

const Bars = styled.div<BarsProps>(
  css({
    marginLeft: 3,
    width: "40px",
    "&::before, &::after, div": {
      borderRadius: "3px",
      content: `""`,
      display: "block",
      height: "5px",
      margin: "7px 0",
      transition: "transform 0.2s ease-in-out",
    },
  }),
  variant({
    prop: "open",
    variants: {
      true: {
        "&::before": {
          transform: "translateY(12px) rotate(135deg)",
        },
        "&::after": {
          transform: "translateY(-12px) rotate(-135deg)",
        },
        div: {
          transform: "scale(0)",
        },
      },
    },
  })
);

const MenuButton = ({ open = false, ...rest }: MenuButtonProps) => (
  <Button variant="menu" {...rest}>
    Meny
    <Bars open={open}>
      <div />
    </Bars>
  </Button>
);

MenuButton.defaultProps = { theme, display: ["flex", "flex", "none"] };

export { MenuButton };
