import { BookDescription } from "../../components/organisms/BookDescription/bookdescO"
import { Footer } from "../../components/organisms/Footer/footerO"
import { HeaderComponent } from "../../components/organisms/Header/headerO"
import { BookDetails } from "../../components/templates/BookDetails/bookdetailsT"

const BookDetailsPage = () => {
    return (
        <BookDetails header={<HeaderComponent />}
        body={<BookDescription />}
        footer={<Footer />} />
    )
}

export default BookDetailsPage