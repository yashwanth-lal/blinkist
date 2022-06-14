import { Story } from "@storybook/react";
import { Banner } from "../../molecules/Banner/bannerM";
import Categories from "../../organisms/BookCategories/bookcatO";
import { FooterComponent } from "../../organisms/Footer/footerO.stories";
import { HeaderComponent } from "../../organisms/Header/headerO";
import { Entrepreneurship, EntrepreneurshipProps } from "./enterprT";
import Library from "../../../data/Library"
import { SearchBar } from "../../molecules/SearchBar/searchbarM.stories";
import {MemoryRouter} from 'react-router-dom'


export default {
    title: 'Templates/Entrepreneurship',
    component: Entrepreneurship
}

let Template: Story<EntrepreneurshipProps> = args => <MemoryRouter><Entrepreneurship {...args} /></MemoryRouter>

export const EntrepreneurshipPage = Template.bind({})
EntrepreneurshipPage.args = {
    header: <HeaderComponent />,
    banner: <Banner />,
    trendingBlinks: <Categories data={Library} ftitle=" " status="trending" />,
    featuredBlinks: <Categories data={Library} ftitle=" " status="featured" />,
    justAddedBlinks: <Categories data={Library}  ftitle=" " status="justAdded" />,
    footer: <FooterComponent />
}