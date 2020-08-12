/** @jsx jsx */
import styled from "@emotion/styled";
import css from "@styled-system/css";
import { variant } from "styled-system";

const MenuContainer: React.FC = styled("div")(
  css({
    display: "flex",
    flexDirection: ["column", "column", "column-reverse"],
    justifyContent: "space-between",
    flexGrow: 1,
    marginLeft: 3,
  })
);

type MenuProps = {
  children?: React.ReactNode;
  variant?: `main` | `top`;
  open?: boolean;
};

const Menu: React.FC<MenuProps> = styled("nav")(
  css({
    display: ["none", "none", "flex"],
    flexDirection: ["column", "column", "row"],
    textAlign: "right",
    marginTop: 2,
    a: {
      color: "text.primary",
      textDecoration: "none",
      padding: 2,
      marginX: 1,
      lineHeight: "title",
    },
    "a:hover, a:active, a:focus": {
      color: "brand.primary",
    },
  }),
  variant({
    prop: "open",
    variants: {
      true: {
        display: ["flex", "flex"],
      },
    },
  }),
  variant({
    variants: {
      main: {
        a: {
          fontFamily: "heading",
        },
      },
      top: {
        alignSelf: "flex-end",
        fontSize: 1,
        "a:hover, a:active, a:focus": {
          textDecoration: "underline",
        },
      },
    },
  })
);

Menu.defaultProps = {
  variant: "main",
};

export { Menu, MenuContainer };
