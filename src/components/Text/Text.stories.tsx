import React from "react";
import { Theme, Container } from "../";
import { Text } from "./";
import { withKnobs, select, number, text } from "@storybook/addon-knobs";

export default {
  title: "Text",
  decorators: [withKnobs],
};

export const Default = () => (
  <Theme>
    <Container>
      <Text
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
      </Text>
    </Container>
  </Theme>
);
