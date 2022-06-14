import { ComponentStory } from "@storybook/react";
import { Banner } from "./bannerM";

export default {
    title: 'Molecules/Banner',
    component: Banner
}

const Template: ComponentStory<typeof Banner> = () => <Banner />

export const EntrepreneurshipBanner = Template.bind({})
EntrepreneurshipBanner.args = {
    
}