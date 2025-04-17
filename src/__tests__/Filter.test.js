import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("renders the Filter component and handles category change", () => {
  const mockOnCategoryChange = jest.fn();
  render(<Filter onCategoryChange={mockOnCategoryChange} />);

  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: "Dairy" } });

  expect(mockOnCategoryChange).toHaveBeenCalledWith("Dairy");
});
