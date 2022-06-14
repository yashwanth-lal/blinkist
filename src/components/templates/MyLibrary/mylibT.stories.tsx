import { Story } from "@storybook/react";
import { MyLibrary, MyLibraryProps } from "./mylibT";
import {HeaderComponent} from '../../organisms/Header/headerO'
import {Footer} from '../../organisms/Footer/footerO'
import { Tabs } from "../../organisms/Tabs/tabsO";
import {MemoryRouter} from 'react-router-dom'


export default {
    title: 'Templates/My Library',
    component: MyLibrary
}

let Template: Story<MyLibraryProps> = args => <MemoryRouter><MyLibrary {...args} /></MemoryRouter>

export const MyLibraryTest = Template.bind({})
MyLibraryTest.args = {
    
    body: <Tabs />,
    footer: <Footer />
}

