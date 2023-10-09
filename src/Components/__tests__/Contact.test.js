import { render, screen } from "@testing-library/react";
import Contact from '../Contact/Contact.jsx';
import "@testing-library/jest-dom";

test("should load contact use component", () => {
    render(<Contact />)
    const heading = screen.getByRole("heading");
    
    expect(heading).toBeInTheDocument();
})

test("should load 2 input boxes on the contact components", () => {
    render(<Contact />)

    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes);

    expect(inputBoxes.length).toBe(2);
})