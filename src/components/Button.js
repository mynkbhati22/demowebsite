import styled from "styled-components";
import style from "styled-theming";

const getBackground = style.variants("mode", "variant", {
  normal: {
    light: "papayawhip",
    dark: "white",
  },
  primary: {
    light: "papayawhip",
    dark: "purple",
  },
});

const Button = styled.button`
  background-color: ${getBackground};
`;

export default Button;
