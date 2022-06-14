import ProgressBar from "./progressbarA";
import { ComponentStory } from "@storybook/react";

export default{
    title:"Atoms/progress bar",
    component:ProgressBar
}
const Template: ComponentStory<any> = args => (
    <ProgressBar {...args} />
  );
  export const progressBarStory = Template.bind({});
  progressBarStory.args = {
    progress:35
  };