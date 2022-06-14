import {screen, render, fireEvent} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {Tabs} from './tabsO'

let TestTabs = () => {
    return (
        <MemoryRouter>
            <Tabs />
        </MemoryRouter>
    )
}

describe("Tabs test", () => {
    test("Is finished test", () => {
        render(<TestTabs />)

        let isFinished = screen.getAllByText("Finished")
        expect(isFinished[0]).toBeInTheDocument()
    })
})