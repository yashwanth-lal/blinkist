import {render, screen} from '@testing-library/react'
import {Icons} from './iconA'
import BlinkistLogo from '../../../images/blinkistlogo.svg'

describe("Display logo", () => {
    test("Should display logo", () => {
        render(<Icons source={BlinkistLogo} />)
        const logo = screen.getByRole("img")
        expect(logo).toBeInTheDocument()
    })
})