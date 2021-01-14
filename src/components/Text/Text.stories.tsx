import React from "react";
import { Text } from "./";

export default {
  title: "Text",
  argTypes: {
    vertical: {
      control: {
        type: "select",
        options: [undefined, "responsive"],
      },
    },
  },
};

export const TextBlock = ({ content = "", ...args }) => (
  <>
    Text:
    <Text {...args}>{content}</Text>
  </>
);

TextBlock.args = {
  fontSize: 2,
  content: "Hello, block world!",
};

export const TextInline = ({ content = "", ...args }) => (
  <>
    Text as span:
    <Text as="span" {...args}>
      {content}
    </Text>
  </>
);

TextInline.args = {
  fontSize: 2,
  content: "Hello, world!",
};
