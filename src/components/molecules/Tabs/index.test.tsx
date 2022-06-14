import {render, screen} from '@testing-library/react'
import { TabsComponent } from './tabsM'

describe("Tabs Test", () => {
    test("", () => {
        render(<TabsComponent />)
        const element = screen.getByText('Currently Reading')
        expect(element).toBeInTheDocument()
    })
})