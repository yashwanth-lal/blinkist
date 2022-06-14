import { ComponentStory } from "@storybook/react";
import {Tabs} from "./tabsO";

export default {
    title: 'Organisms/Tabs',
    component: Tabs
}

let Template: ComponentStory<typeof Tabs> = () => <Tabs />

export const TabComponent = Template.bind({})
TabComponent.args = {

}