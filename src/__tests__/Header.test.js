import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("renders the Header component and toggles dark mode", () => {
  const mockOnDarkModeClick = jest.fn();
  render(<Header onDarkModeClick={mockOnDarkModeClick} isDarkMode={false} />);

  const button = screen.getByText("Light Mode");
  fireEvent.click(button);

  expect(mockOnDarkModeClick).toHaveBeenCalled();
});
