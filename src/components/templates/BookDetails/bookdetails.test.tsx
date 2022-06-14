import { BookDescription } from "../../organisms/BookDescription/bookdescO";
import { Footer } from "../../organisms/Footer/footerO";
import { HeaderComponent } from "../../organisms/Header/headerO";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BookDetails } from "./bookdetailsT";

describe("Book Details Template Test", () => {
  test("Should exist", () => {
    render(
      <MemoryRouter>
        <BookDetails
          header={<HeaderComponent />}
          body={<BookDescription />}
          footer={<Footer />}
        />
      </MemoryRouter>
    );
  });
});
