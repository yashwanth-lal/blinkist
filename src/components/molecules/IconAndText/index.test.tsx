import { render, screen } from "@testing-library/react";
import  { IconAndText } from "./iconandtextM";
import { ReactComponent as User } from "../../../images/user.svg";
import { ReactComponent as Time } from "../../../images/time.svg";
import { ReactComponent as Entreprenuer } from "../../../images/entreprenuer.svg";


describe("Icon And Text test", () => {
    test("User test", () => {
        render(<IconAndText iconSource={<User />} title={"1.9k reads"} variant="caption" />)
        const element = screen.getByText("1.9k reads")
        expect(element).toBeInTheDocument()
    })

    test("time test", () => {
        render(<IconAndText iconSource={<Time />} title={"13-min read"} variant="caption" />)
        const element = screen.getByText("13-min read")
        expect(element).toBeInTheDocument()
    })

    test("enterprenuer test", () => {
        render(<IconAndText iconSource={<Entreprenuer />} title={"Entreprenuership"} variant="body1" />)
        const element = screen.getByText("Entreprenuership")
        expect(element).toBeInTheDocument()
    })
})