import styled from "@emotion/styled";
import css from "@styled-system/css";
import { variant } from "styled-system";
import theme from "../theme";

interface MenuContainerProps {
  open?: boolean;
}

const MenuContainer = styled.div<MenuContainerProps>(
  (props) =>
    props.open ? `display: grid;` : css({ display: ["none", "none", "grid"] }),
  css({
    gridTemplateRows: [null, null, "50%"],
    height: "100%",
    marginLeft: 3,
  })
);

MenuContainer.defaultProps = { theme };

interface MenuProps {
  children?: React.ReactNode;
  variant?: `main` | `top`;
  open?: boolean;
}

const Menu = styled.nav<MenuProps>(
  css({
    flexDirection: ["column", "column", "row"],
    display: "flex",
    textAlign: "right",
    marginTop: 2,
    a: {
      color: "text",
      textDecoration: "none",
      padding: 2,
      marginX: 1,
      lineHeight: "heading",
    },
    "a:hover, a:active, a:focus": {
      color: "primary",
    },
  }),
  variant({
    variants: {
      main: {
        fontSize: 2,
        fontWeight: "heading",
        a: {
          fontFamily: "heading",
        },
      },
      top: {
        justifyContent: "flex-end",
        gridRow: [null, null, 1],
        marginBottom: "auto",
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
  theme,
};

export { Menu, MenuContainer };
