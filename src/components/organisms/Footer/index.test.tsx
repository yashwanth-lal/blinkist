import { Footer } from "./footerO";
import { render, screen } from "@testing-library/react";

describe("Footer test", () => {
    test("Testing for data", () => {
        render(<Footer />)

        let randomData = screen.getByText("What is Nonfiction?")
        expect(randomData).toBeInTheDocument()
    })
    test("should Display Footer", () => {
        render(<Footer />);
        const footer = screen.getByTestId("footer");
        expect(footer).toBeInTheDocument();
      });
   
})