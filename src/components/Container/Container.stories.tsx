import React from "react";
import { Theme } from "../";
import { Container } from "./";
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
  title: "Container",
  decorators: [withKnobs],
};

export const Default = () => (
  <Theme>
    <Container>
      <Container
        boxShadow={select("Elevation", [0, 1, 2], 0)}
        padding={select("Padding", [undefined, "default", "none"], undefined)}
        variant={select(
          "Color",
          [undefined, "white", "primary", "secondary", "dark"],
          undefined
        )}
      >
        <h1>Næring til læring</h1>
        <p>
          Lorem ipsum dolor sit amet, melius impedit omnesque est no, cu est
          velit repudiare dissentiet, te commune antiopam urbanitas quo. Ea qui
          hinc mucius, <a href="#">mel reque fugit mundi an</a>. Per ferri
          virtute ei, id est decore fuisset antiopam. Antiopam voluptaria
          consectetuer no qui, ne quo pericula dissentiunt, his tation mollis
          et. Pro diam appetere facilisi ne, ei euismod molestie maiestatis mea.
          Cu eripuit bonorum reprehendunt duo, id sed habeo postulant.
        </p>
      </Container>
    </Container>
  </Theme>
);