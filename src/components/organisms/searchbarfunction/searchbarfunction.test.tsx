import {render, screen} from '@testing-library/react'
import Find from './searchbarfunction';
import  SearchBar  from "./searchbarfunction";

describe("Search bar test", () => {
    test("Search bar", () => {
        render(<SearchBar setTitle={"books"}/>)
        const search = screen.getByRole("textbox")
        expect(search).toBeInTheDocument()
       
    })

    test("Search bar", () => {
        render(<Find setTitle={"books"} />)
        const element = screen.getByPlaceholderText("Search by title or author")
        expect(element).toBeInTheDocument()
    })
    
})

