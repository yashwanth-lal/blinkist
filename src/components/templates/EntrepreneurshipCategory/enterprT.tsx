import { styled } from "@mui/styles";
export interface EntrepreneurshipProps {
    header: React.ReactNode;
    footer: React.ReactNode;
    trendingBlinks: React.ReactNode;
    justAddedBlinks: React.ReactNode;
    featuredBlinks: React.ReactNode;
    banner: React.ReactNode;
    find:React.ReactNode;
}

let BodyContainer = styled("div")({
    width: 512,
    position: 'relative',
    left: 250,
    marginLeft:240,
    minHeight:500,
})


let SearchContainer = styled("div") ({
    position: 'relative',
    top: 104,
    left: 25
})

let TrendingBlinks = styled("div") ({
    position: 'relative',
    top: 184,
    left: 25
})

let JustAddedBlinks = styled("div") ({
    position: 'relative',
    top: 280,
    left: 25
})

let FeaturedBlinks = styled("div") ({
    position: 'relative',
    top: 376,
    left: 25
})

let Footer = styled("div") ({
    position: 'relative',
    top: 452
})
let Head = styled("div")({
   position:"relative",
   right:200
})
export const Entrepreneurship = (props: EntrepreneurshipProps) => {
    let {header, footer, trendingBlinks, justAddedBlinks, banner, featuredBlinks,find} = props
    return (
        <>
        <div style={{overflowX: "hidden", maxHeight:"auto"}}>
                   
            <Head>
            {header}
            </Head>
            <BodyContainer>
                {banner}
                <SearchContainer>
                {find}
                </SearchContainer>
                <TrendingBlinks>
                {trendingBlinks}
                </TrendingBlinks>
                <JustAddedBlinks>
                {justAddedBlinks}
                </JustAddedBlinks>
                <FeaturedBlinks>
                {featuredBlinks}
                </FeaturedBlinks>
            </BodyContainer>
            <Footer>
            {footer}
            </Footer>
            </div>
        </>
    )
}