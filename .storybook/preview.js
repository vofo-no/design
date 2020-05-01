import React from "react";
import { addDecorator } from "@storybook/react";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";

addDecorator((story) => <CacheProvider value={cache}>{story()}</CacheProvider>);
