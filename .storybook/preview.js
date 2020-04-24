import React from "react";
import { addDecorator } from "@storybook/react";
import { TypographyStyle, GoogleFont } from "react-typography";
import { typography } from "../src/components/Theme";

addDecorator((story) => (
  <>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    {story()}
  </>
));
