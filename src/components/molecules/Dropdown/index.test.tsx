import { render, screen } from "@testing-library/react";
import { Dropdown } from "./dropdownM";

describe("Dropdown test", () => {
    test("Explore dropdown test", () => {
        render(<Dropdown title={"Explore"} />)
        const explore = screen.getByText('Explore')
        expect(explore).toBeInTheDocument()
    })

    test("Avatar logo", () => {
        render(<Dropdown title="Account" letter="Y" />);
        const logo = screen.getByText("Y");
        expect(logo).toBeInTheDocument();
      });   

      
})

