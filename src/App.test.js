import { render, screen } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";

test("renders App without crashing", () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
});
