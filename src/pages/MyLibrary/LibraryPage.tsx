import { Footer } from "../../components/organisms/Footer/footerO";
import { HeaderComponent } from "../../components/organisms/Header/headerO";
import { Tabs } from "../../components/organisms/Tabs/tabsO";
import { MyLibrary } from "../../components/templates/MyLibrary/mylibT";

const LibraryPage = () => {
    return (
        <>
            <MyLibrary header={<HeaderComponent />}
            body={<Tabs />}
            footer={<Footer />}
            ></MyLibrary>
        </>
    )
}

export default LibraryPage