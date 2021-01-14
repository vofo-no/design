import React from "react";
import theme from "../theme-default";
import { Box } from "./";

export default {
  title: "Box",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [undefined, "dark", "primary", "secondary", "light"],
      },
    },
    boxShadow: {
      control: {
        type: "select",
        options: Object.keys(theme.shadows),
      },
    },
  },
};

export const Default = (args: any) => (
  <Box {...args}>
    <h1>Næring til læring</h1>
    <p>
      Lorem ipsum dolor sit amet, melius impedit omnesque est no, cu est velit
      repudiare dissentiet, te commune antiopam urbanitas quo. Ea qui hinc
      mucius, <a href="#">mel reque fugit mundi an</a>. Per ferri virtute ei, id
      est decore fuisset antiopam. Antiopam voluptaria consectetuer no qui, ne
      quo pericula dissentiunt, his tation mollis et. Pro diam appetere facilisi
      ne, ei euismod molestie maiestatis mea. Cu eripuit bonorum reprehendunt
      duo, id sed habeo postulant.
    </p>
  </Box>
);

Default.args = {
  boxShadow: undefined,
  py: 2,
  px: 3,
  variant: undefined,
};

export const Grid = () => (
  <Box
    gridTemplateRows={["300px auto", "300px auto", "400px"]}
    gridTemplateColumns={[null, null, "50% 50%"]}
    display="grid"
    variant="dark"
    py={0}
    px={0}
  >
    <h1>Næring til læring</h1>
    <Box variant="primary" p={3}>
      <p>
        Lorem ipsum dolor sit amet, melius impedit omnesque est no, cu est velit
        repudiare dissentiet, te commune antiopam urbanitas quo. Ea qui hinc
        mucius, <a href="#">mel reque fugit mundi an</a>. Per ferri virtute ei,
        id est decore fuisset antiopam. Antiopam voluptaria consectetuer no qui,
        ne quo pericula dissentiunt, his tation mollis et. Pro diam appetere
        facilisi ne, ei euismod molestie maiestatis mea. Cu eripuit bonorum
        reprehendunt duo, id sed habeo postulant.
      </p>
    </Box>
  </Box>
);
