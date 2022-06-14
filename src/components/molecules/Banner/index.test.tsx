import { render,screen } from "@testing-library/react";
import { Banner } from "./bannerM";

describe("Banner test", () => {
    test("Banner checking", () => {
        render(<Banner />)
        const text = screen.getByText("Explore Books on Entrepreneurship")
        expect(text).toBeInTheDocument();
    })
  
    test("Search bar", () => {
        render(<Banner/>)
        const image = screen.getByRole("img")
        expect(image).toBeInTheDocument()
})
})