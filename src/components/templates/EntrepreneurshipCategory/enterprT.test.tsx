import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Entrepreneurship } from "./enterprT";
import { Banner } from "../../molecules/Banner/bannerM";
import Categories from "../../organisms/BookCategories/bookcatO";
import Library from "../../../data/Library";
import Find from "../../organisms/searchbarfunction/searchbarfunction";

describe("Entrepreneurship Page", () => {
  test("Existence test", () => {
    render(
      <MemoryRouter>
        <Entrepreneurship
          banner={<Banner />}
          find={<Find setTitle />}
          trendingBlinks={<Categories data={Library} ftitle='' status="trending" />}
          justAddedBlinks={<Categories data={Library} ftitle='' status="justAdded" />}
          featuredBlinks={<Categories data={Library} ftitle='' status="featured" />} header={undefined} footer={undefined}        />
      </MemoryRouter>
    );
  });
});