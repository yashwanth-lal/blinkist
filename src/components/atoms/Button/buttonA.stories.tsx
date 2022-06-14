import { Story } from "@storybook/react";
import { ButtonComponent, ButtonIconProps } from "./buttonA";
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default {
    title: "Atoms/Buttons",
    component: ButtonComponent
}

const Template: Story<ButtonIconProps> = args => <ButtonComponent {...args} />

export const AddToLibraryButtonHoverState = Template.bind({})
AddToLibraryButtonHoverState.args = {
    variant: 'contained',
    startIcon: <AddIcon />,
    style: {
        backgroundColor: '#0365F2',
        color: 'white',
    },
    children: 'Add to library'
}

export const AddToLibraryButtonRestingState = Template.bind({})
AddToLibraryButtonRestingState.args = {
    variant: 'outlined',
    startIcon: <AddIcon />,
    style: {
        color: '#0365F2',
        border: 'none'
    },
    children: 'Add to library'
}

export const FinishedReadingResting = Template.bind({})
FinishedReadingResting.args = {
    variant: 'contained',
    style: {
        backgroundColor: '#2CE080',
        fontFamily: 'sans-serif',
        color: '#03314B',
        padding: '12px 24px 12px 24px',
        borderRadius: '4px'
    },
    children: 'Finished Reading'
}

export const ReadNow = Template.bind({})
ReadNow.args = {
    variant: 'outlined',
    style: {
        fontFamily: 'no',
        color: '#2CE080',
        padding: '12px 24px 12px 24px',
        borderRadius: '4px',
        border: '1px solid lightgray'
    },
    children: 'Read now'
}

export const SendToKindle = Template.bind({})
SendToKindle.args = {
    variant: 'text',
    style: {
        color: '#6D787E',
        padding: '12px 24px 12px 24px'
    },
    endIcon: <ArrowForwardIcon />,
    children: 'Send to Kindle'
}

