import { ComponentStory } from "@storybook/react";
import { AboutBook } from "./aboutbookO";

export default {
    title: "Organisms/About Book",
    component: AboutBook
}

let Template: ComponentStory<typeof AboutBook> = () => < AboutBook />

export const AboutBookTest = Template.bind({})
AboutBookTest.args = {
    
}