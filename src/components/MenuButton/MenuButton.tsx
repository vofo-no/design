/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import css from "@styled-system/css";
import { variant } from "styled-system";

interface MenuButtonProps {
  open: boolean;
  onClick: (event: any) => void;
}

const Button = styled.button(
  css({
    fontFamily: "heading",
    background: "none",
    border: "none",
    display: ["flex", "flex", "none"],
    alignItems: "center",
    cursor: "pointer",
    alignSelf: "flex-end",
    textTransform: "uppercase",
    padding: 2,
    marginBottom: "auto",
    "div::before, div::after, div > div": {
      backgroundColor: "brand.gray",
    },
    "&:hover": {
      color: "brand.primary",
      "div::before, div::after, div > div": {
        backgroundColor: "brand.primary",
      },
    },
  })
);

const Bars = styled.div(
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
    variants: {
      open: {
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

const MenuButton = ({ open = false, onClick }: MenuButtonProps) => (
  <Button onClick={onClick}>
    Meny
    <Bars variant={open && "open"}>
      <div />
    </Bars>
  </Button>
);

export { MenuButton };
