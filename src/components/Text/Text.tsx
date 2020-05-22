/** @jsx jsx */
import styled from "@emotion/styled";
import { typography, color } from "styled-system";

type TextProps = {
  children?: React.ReactNode;
  color?: string;
  fontFamily?: string;
  fontSize?: number | number[];
  fontWeight?: string;
  lineHeight?: string;
};

const Text: React.FC<TextProps> = styled("span")(typography, color);

export { Text };
