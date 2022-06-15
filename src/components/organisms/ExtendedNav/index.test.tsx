import {screen, render, fireEvent} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import { ExtendedNav } from './extendednavO'

let TestExtendedNav = () => {
    return (
        <MemoryRouter>
            <ExtendedNav />
        </MemoryRouter>
    )
}

describe("Extended Nav Test", () => {
    test("Nav test", () => {
        render(<TestExtendedNav />)
        
        let politics = screen.getByText("Politics")
        expect(politics).toBeInTheDocument
    })

    test('check the if is present', () => {
        render(<TestExtendedNav />);
        const name = screen.getAllByText('Explore by category');
        expect(name).toBeInTheDocument
        });
        
        test("onClick",()=>{
            let result = false;
            render(<TestExtendedNav />)
            fireEvent.click(screen.getByText("Entrepreneurship"));
            expect(result).toBe(false);
        })
        
          
        
    
})