/** @jsx jsx */
import styled from "@emotion/styled";
import { typography, color } from "styled-system";

type TextProps = {
  children?: React.ReactNode;
  color?: string;
  fontFamily?: string;
  fontSize?: number | number[];
  fontWeight?: string;
  lineHeight?: string | string[];
  textAlign?: string;
};

const Inline: React.FC<TextProps> = styled("span")(typography, color);

const Block: React.FC<TextProps> = styled("div")(typography, color);

const Text = { Inline, Block };

export { Text };
