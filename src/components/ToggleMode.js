import React from "react";
import { ThemeConsumer } from "styled-components";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import Button from "./Button";

export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          variant="primary"
          onClick={(e) =>
            theme.setTheme(
              theme.mode === "dark"
                ? { ...theme, mode: "light" }
                : { ...theme, mode: "dark" }
            )
          }
        >
          <MdDarkMode size={28} />
        </Button>
      )}
    </ThemeConsumer>
  );
}
