import { ComponentStory } from "@storybook/react";
import { HeaderComponent } from "./headerO";


export default {
    title: 'Organisms/Header',
    component: HeaderComponent
}

const Template: ComponentStory<typeof HeaderComponent> = () => <HeaderComponent />

export const TestComp = Template.bind({})
