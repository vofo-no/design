import React from "react";
import { BaseStyles } from "../src";

export const decorators = [
  (Story) => (
    <BaseStyles>
      <Story />
    </BaseStyles>
  ),
];
