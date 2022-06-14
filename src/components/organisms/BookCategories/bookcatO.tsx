import { Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useEffect, useState } from "react";
import { Card } from "../Card/cardO";

interface BookDisplayProps {
  id: number;
  title: string;
  author: string;
  timeToRead: string;
  numberOfReads: string;
  image: string;
  status: {
    isTrending: boolean;
    isFinished: boolean;
    isFeatured: boolean;
    justAdded: boolean;
  };
}

interface CardProps {
  data: Array<BookDisplayProps>;//here the data is an Array<T> and can only contains read only not write or update
  ftitle:string;
  status?: string;
}

let MainContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "25px 30px",
  width: 1200
});

let useStyles = makeStyles({
    title: {
        fontSize: "24px !important",
        fontWeight: "700 !important",
        color: '#03314B'
    }
})

const Categories = (props: CardProps) => {
  let {data, status,ftitle} = props
  const [showData, setShowData] = useState(data);
  const [title, setTitle] = useState("")
  const searchInput= ftitle;
  let lowerCaseText=searchInput?.toLowerCase()
  // console.log("small"+lowerCaseText)
  let styles = useStyles()
  
  // console.log(searchInput)

  
  let filterBooks = (statusOfBlink: string) => {
    if (statusOfBlink === "featured") {
      setShowData(showData.filter((item) => item.status.isFeatured));
      setTitle("Featured")

    } else if(statusOfBlink === "trending") {
        setShowData(showData.filter((item) => item.status.isTrending))
        setTitle("Trending")
    }

    else if(statusOfBlink === "justAdded") {
      setShowData(showData.filter((item) => item.status.justAdded));
      setTitle("Just Added")
    }
  };

  useEffect(() => {
    if (status === "trending") {
      filterBooks("trending");
    } else if (status === "featured") {
      filterBooks("featured");
    } else {
      filterBooks("justAdded");
    }
  }, [status]);

  return (
    <>
      <Typography variant="h3" className={styles.title}>{title}</Typography>
        <br></br>
        <MainContainer>
          {showData.map((book, key) => {
            if(lowerCaseText?.length === 0){
            return (
              <Card
                id={book.id}
                key={key}
                title={book.title}
                author={book.author}
                timeToRead={book.timeToRead}
                numberOfReads={book.numberOfReads}
                image={book.image}
                isFinished={book.status.isFinished}
                addToLibrary={true}
                value={book.id}
              />
            );
            }else{
              if(((book.author).toLowerCase().includes(lowerCaseText))||
              ((book.title).toLowerCase().includes(lowerCaseText)) ){
                return (
                  <Card
                    id={book.id}
                    key={key}
                    title={book.title}
                    author={book.author}
                    timeToRead={book.timeToRead}
                    numberOfReads={book.numberOfReads}
                    image={book.image}
                    isFinished={book.status.isFinished}
                    addToLibrary={true}
                    value={book.id}
                  />
                );

              }
            }
          })}
        </MainContainer>
    </>
  );
};
export default Categories;
