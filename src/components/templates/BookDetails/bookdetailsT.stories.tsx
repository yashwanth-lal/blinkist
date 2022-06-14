import {BookDetails, BookDetailsProps} from './bookdetailsT'
import {Story} from '@storybook/react'
import {HeaderComponent} from '../../organisms/Header/headerO'
import {Footer} from '../../organisms/Footer/footerO'
import { BookDescription } from "../../organisms/BookDescription/bookdescO";
import {MemoryRouter} from 'react-router-dom'


export default {
    title: 'Templates/Book Details',
    component: BookDetails
}

let Template: Story<BookDetailsProps> = args => <MemoryRouter><BookDetails {...args} /></MemoryRouter>

export const BookDetailsTemplate = Template.bind({})
BookDetailsTemplate.args = {
    header: <HeaderComponent />,
    body: <BookDescription />,
    footer: <Footer />
}