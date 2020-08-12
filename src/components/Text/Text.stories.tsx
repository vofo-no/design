import React from "react";
import { Theme, Container } from "../";
import { Text } from "./";
import { select, number, text } from "@storybook/addon-knobs";

export default {
  title: "Text",
};

export const TextBlock = () => (
  <Theme>
    <Container>
      Text.Block:
      <Text.Block
        color={text("Color", null)}
        fontFamily={select("Font family", [null, "body", "heading"], null)}
        fontSize={number("Font size", 2)}
        fontWeight={select(
          "Font weight",
          [null, "regular", "heading", "bold"],
          null
        )}
        lineHeight={select("Line height", [null, "copy", "title"], null)}
      >
        {text("String", "Hello, world")}
      </Text.Block>
    </Container>
  </Theme>
);

export const TextInline = () => (
  <Theme>
    <Container>
      Text.Inline:
      <Text.Inline
        color={text("Color", null)}
        fontFamily={select("Font family", [null, "body", "heading"], null)}
        fontSize={number("Font size", 2)}
        fontWeight={select(
          "Font weight",
          [null, "regular", "heading", "bold"],
          null
        )}
      >
        {text("String", "Hello, world")}
      </Text.Inline>
    </Container>
  </Theme>
);
