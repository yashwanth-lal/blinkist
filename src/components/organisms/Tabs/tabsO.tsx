import { makeStyles, styled, ThemeProvider } from "@mui/styles";
import { BookInfo, Card } from "../Card/cardO";
import theme from "../../themes/theme";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useEffect, useState } from "react";
import { Container, Tab, Typography } from "@mui/material";
import api from "../../../api/api";

let MainContainer = styled("div")({
  width: 912,
});

let TabsContainer = styled("div")({
  width: "100%",
});

let CardStyling = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "25px 30px",
  width: 922,
  position: "relative",
});

let useStyles = makeStyles({
  containerStyling: {
    borderBottom: "2px solid #F1F6F4",
  },
  tabStyling: {
    width: 304,
    alignSelf: "flex-start",
  },
  selectedTab: {
    color: "#22C870 !important",
  },
});

export const Tabs = () => {
  let [value, setValue] = useState("1");

  let handleChange = (event: React.SyntheticEvent, newValue: string) => {
    // console.log(event)
    setValue(newValue);
  };

  const [books, setBooks] = useState<BookInfo[]>([
    {
      id: 0,
      title: "",
      author: "",
      timeToRead: "",
      numberOfReads: "",
      image: "",
      status: {
        isFinished: false,
        isFeatured: false,
        isTrending: false,
        justAdded: false,
      },
    },
  ]);

  let [count, setCount] = useState(0)
  const getBooks = async () => {
    const response = await api.get("/library/");
    const data = response.data;
    setBooks(data);
    
  };

  let incrementCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    getBooks();
  }, [count]);

  let styles = useStyles();
  //no books message
 let emptyCurrent=books.filter(item => !item.status.isFinished).length === 0 ? <Typography    sx={{fontSize:50}}>No books to add</Typography> :null;
 let emptyFinished=books.filter(item => item.status.isFinished).length === 0 ? <Typography    sx={{fontSize:50}}>No books to show</Typography> :null;

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <TabsContainer>
          <TabContext value={value}>
            
            <Container className={styles.containerStyling}>
            <Typography   sx={{fontFamily:"sans-serif",fontSize:36,fontWeight:700,lineHeight:3}}>My Library</Typography>
              <TabList
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#2CE080",
                  },
                }}
              >
                <Tab
                  classes={{ selected: styles.selectedTab }}
                  label="Currently Reading"
                  value="1"
                  sx={{
                    width: 304,
                    alignItems: "flex-start",
                    textTransform: "none",
                    position: "relative",
                    marginLeft: -2,
                    fontSize: 18,
                  }}
                />
                <Tab
                  classes={{ selected: styles.selectedTab }}
                  label="Finished"
                  value="2"
                  sx={{
                    width: 304,
                    alignItems: "flex-start",
                    textTransform: "none",
                    position: "relative",
                    marginLeft: -2,
                    fontSize: 18,
                  }}
                />
              </TabList>
            </Container>
            <TabPanel value="1">
              <CardStyling>
              {emptyCurrent} 
                
                {books.filter((item) => !item.status.isFinished)
                  .map((card, key) => {
                    return (
                      <Card
                        id={card.id}
                        key={key}
                        image={card.image}
                        title={card.title}
                        author={card.author}
                        timeToRead={card.timeToRead}
                        numberOfReads={card.numberOfReads}
                        isFinished={!card.status.isFinished}
                        value={card.id}
                        onClick={incrementCount}
                        />
                    );
                  })}
              </CardStyling>
            </TabPanel>
            <TabPanel value="2">
              <CardStyling>
              {emptyFinished} 
                {books.filter((item) => item.status.isFinished)
                  .map((book, key) => {
                    return (
                      <Card
                        id={book.id}
                        key={key}
                        title={book.title}
                        author={book.author}
                        timeToRead={book.timeToRead}
                        numberOfReads={book.numberOfReads}
                        readAgain={book.status.isFinished}
                        image={book.image}
                        value={book.id}
                        onClick={incrementCount}
                        isFinished={!book.status.isFinished}
                      />
                    );
                  })}
              </CardStyling>
            </TabPanel>
          </TabContext>
        </TabsContainer>
      </MainContainer>
    </ThemeProvider>
  );
};
