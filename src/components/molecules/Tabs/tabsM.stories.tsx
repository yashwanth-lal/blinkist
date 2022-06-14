import { ComponentStory } from "@storybook/react";
import { TabsComponent } from "./tabsM";

export default {
    title: 'Molecules/Tabs',
    component: TabsComponent
}

const Template: ComponentStory<typeof TabsComponent> = () => <TabsComponent />

export const CurrentlyReadingAndFinishedTabs = Template.bind({})
CurrentlyReadingAndFinishedTabs.args = {

}