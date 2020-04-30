/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

import { defaultTheme, VofoTheme, typographyJSON } from "../Theme";

interface MenuButtonProps {
  open: boolean;
  onClick: (event: any) => void;
}

const MenuButton = ({ open = false, onClick }: MenuButtonProps) => {
  const theme: VofoTheme = useTheme() || defaultTheme;

  return (
    <button
      onClick={onClick}
      css={{
        ...typographyJSON.h4,
        background: "none",
        border: "none",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        alignSelf: "flex-end",
        textTransform: "uppercase",
        padding: theme.spacing.unit * 0.5,
        marginBottom: "auto",
        [`@media (min-width: ${theme.breakpoints.header})`]: {
          display: "none",
        },
        "&:hover": {
          color: theme.colors.brand,
        },
      }}
    >
      Meny
      <div
        css={{
          marginLeft: theme.spacing.unit * 0.5,
          width: 40,
          "&::before, &::after, div": {
            backgroundColor: theme.colors.gray,
            borderRadius: 3,
            content: `""`,
            display: "block",
            height: 5,
            margin: "7px 0",
            transition: "all 0.2s ease-in-out",
          },
          "&::before": {
            transform: open ? "translateY(12px) rotate(135deg)" : null,
          },
          "&::after": {
            transform: open ? "translateY(-12px) rotate(-135deg)" : null,
          },
          div: {
            transform: open ? "scale(0)" : null,
          },
        }}
      >
        <div />
      </div>
    </button>
  );
};

export { MenuButton };
