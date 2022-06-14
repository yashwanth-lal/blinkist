import { render, screen } from "@testing-library/react";
import {FooterNav} from './footernavM'
import {FooterNavData} from '../../../data/FooterNavData'

describe('<Footer>', () => {
  test('check if it is present', () => {
    render(<FooterNav title={""} data={[]} />);
    const name = screen.getByTestId('footernav');
    expect(name).toBeDefined();
  });
  test('check if it is truthy', () => {
    render(<FooterNav title={""} data={[]} />);
    const name = screen.getByTestId('footernav');
    expect(name).toBeTruthy();
  });
});


describe("Footer Nav Test", () => {
    test("Editorial test", () => {
        render(<FooterNav data={FooterNavData.Editorial.data} title={FooterNavData.Editorial.title} />)
        const element = screen.getByText("Editorial")
        expect(element).toBeInTheDocument();
    })

    test("Useful links test", () => {
        render(<FooterNav data={FooterNavData.UsefulLinks.data} title={FooterNavData.UsefulLinks.title} />)
        const element = screen.getByText("Useful Links")
        expect(element).toBeInTheDocument();
    })

    test("Company test", () => {
        render(<FooterNav data={FooterNavData.Company.data} title={FooterNavData.Company.title} />)
        const element = screen.getByText("Company")
        expect(element).toBeInTheDocument();
    })
})
