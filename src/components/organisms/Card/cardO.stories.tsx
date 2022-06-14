import { Story } from "@storybook/react";
import { Card, CardProps } from "./cardO";
import beingBoss from '../../../images/beingBoss.svg'
import {MemoryRouter} from 'react-router-dom'


export default {
    title: 'Organisms/Card',
    component: Card
}

let Template: Story<CardProps> = args => <Card {...args} />

export const CardComponent = Template.bind({})
CardComponent.args = {
    
    image: beingBoss,
    title: "Being Boss",
    author: 'Kathleen Shannon and Emily...',
    timeToRead: '13-minute read',
    numberOfReads: '1.9k reads',
    isFinished: true,
    // readAgain: true,
    // addToLibrary: false
}
