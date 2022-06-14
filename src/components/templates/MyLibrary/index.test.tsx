import { Footer } from "../../organisms/Footer/footerO";
import { HeaderComponent } from "../../organisms/Header/headerO";
import { MyLibrary } from "./mylibT";
import { Tabs } from "../../organisms/Tabs/tabsO";

describe("My Library Test", () => {
    test("Existence test", () => {
        <MyLibrary header={<HeaderComponent />}
        body={<Tabs />}
        footer={<Footer />}
        ></MyLibrary>
    })
})