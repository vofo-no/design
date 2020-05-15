import React from "react";
import { Theme } from "./";
import { Container } from "../";

export default { title: "Theme" };

export const Typography = () => (
  <Theme>
    <Container>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <p>
        Lorem ipsum dolor sit amet, melius impedit omnesque est no, cu est velit
        repudiare dissentiet, te commune antiopam urbanitas quo. Ea qui hinc
        mucius, mel reque fugit mundi an. Per ferri virtute ei, id est decore
        fuisset antiopam. Antiopam voluptaria consectetuer no qui, ne quo
        pericula dissentiunt, his tation mollis et. Pro diam appetere facilisi
        ne, ei euismod molestie maiestatis mea. Cu eripuit bonorum reprehendunt
        duo, id sed habeo postulant.
      </p>
      <p>
        Ne veri scripta <strong>tritani vix</strong>, vix homero partiendo no.
        Vero tritani suscipit ea has. <em>Ad purto mnesarchum vel</em>, an
        vocibus appetere menandri nec. Ea vim omnis appellantur, quo congue
        conclusionemque et,{" "}
        <em>
          <strong>vel cu fugit iisque integre</strong>
        </em>
        . Vivendo tibique maiestatis est id, accumsan voluptatibus ut qui,
        aeterno probatus ne ius.
      </p>
      <p>
        <a href="#">Link text</a>
      </p>
      <blockquote>
        Lorem ipsum dolor sit amet, melius impedit omnesque est no, cu est velit
        repudiare dissentiet, te commune antiopam urbanitas quo. Ea qui hinc
        mucius, mel reque fugit mundi an. Per ferri virtute ei, id est decore
        fuisset antiopam. Antiopam voluptaria consectetuer no qui, ne quo
        pericula dissentiunt, his tation mollis et. Pro diam appetere facilisi
        ne, ei euismod molestie maiestatis mea. Cu eripuit bonorum reprehendunt
        duo, id sed habeo postulant.
      </blockquote>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
      <ol>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>
    </Container>
  </Theme>
);
