import { Typography } from "@mui/material";
import { styled, makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../themes/theme";
import { useEffect, useState } from "react";
import { IconAndText } from "../../molecules/IconAndText/iconandtextM";
import { ReactComponent as User } from "../../../images/user.svg";
import { ReactComponent as Time } from "../../../images/time.svg";
import { ReactComponent as Add } from "../../../images/add.svg";
import {ButtonComponent} from "../../atoms/Button/buttonA"
import api from "../../../api/api";
import ProgressBar from "../../atoms/progressbar/progressbarA";
import {useNavigate} from 'react-router-dom'


let MainContainer = styled("div")({
  
  width: 284,
  height: 494,
  borderRadius: 8,
  border: "1px solid #E1ECFC",
});

let ImageContainer = styled("div")({
  width: 284,
  height: 292,
});

let InfoContainer = styled("div")({
  position: "relative",
  top: 23,
  left: 16,
  width: 224,
  height: 95,
});

let OtherDetails = styled("div") ({
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  top: 17,
  left: -10,
  fontFamily: 'sans-serif !important', 

})

let TimeToReadDiv = styled("div") ({
  left: 17.67,
  fontSize: 14,
  position: 'relative',
  fontFamily: 'sans-serif !important', 

})

let NumberOfReads = styled("div") ({
  position: 'relative',
  left: 47.33,
  fontSize: 14,
  fontFamily: 'sans-serif !important', 

})

let ButtonDiv = styled("div") ({
  position: 'relative',
  top: 10
})
let PBar = styled("div") ({
  position: 'relative',
  left:0,
  top:10
  
})

let useStyles = makeStyles({
  author: {
    position: "relative",
    top: 16,
    
    fontFamily: 'sans-serif !important', 
    '&:hover': {
      cursor: 'pointer'
    },
    color: "#6D787E",
    fontSize: 16,
    fontWeight: 500,
  },
  title: {
    fontWeight: 700,
    fontSize: '17.5px !important',
    fontFamily: 'sans-serif !important', 
    '&:hover': {
      cursor: 'pointer'
    },
    color: "#03314B",
    lineHeight:"0"
  },
  image: {
    width: 16.67,
    height: 16.67,
    '&:hover': {
      cursor: 'pointer'
    },
  },
  finished: {
    color: '#0365F2 !important',
    position: 'relative',
    textAlign:"center",
    fontFamily: 'sans-serif !important', 

    top: 30,
    fontWeight: 500,
    fontSize: 16,
    '&:hover': {
      cursor: 'pointer'
    },
    
  },
  button1: {
    width: '100%',
    height: 52,
    color: '#0365F2 !important',
    "&:hover": {
      color: 'white !important',
      backgroundColor: '#C5C5C5 !important',
      fill: 'white'
    }
  },
  button: {
    width: '100%',
    height: 52,
    color: '#0365F2 !important',
    "&:hover": {
      color: 'white !important',
      backgroundColor: '#0365F2 !important',
      fill: 'white'
    }
  }
});

export interface CardProps {
  id?: number;
  title?: string;
  author?: string;
  timeToRead?: string;
  numberOfReads?: string;
  image?: string;
  isFinished?: boolean;
  addToLibrary?: boolean;
  value: number;


  currentlyReading?: boolean;
  readAgain?: boolean;
  className?: string;
  onClick?: () => void;
}

export type BookInfo = {
  id: number,
  title: string,
  author: string,
  image: string,
  timeToRead: string,
  numberOfReads: string,
  status: {
    isFinished: boolean,
    isTrending: boolean,
    justAdded: boolean,
    isFeatured: boolean
  }
}

export const Card = (props: CardProps) => {
  let {value, onClick, image, title, author, timeToRead, numberOfReads, readAgain, addToLibrary, isFinished } = props
  let styles = useStyles();

  let [iconStyle, setIconStyle] = useState({})

 const [bookInfo, setBookInfo] = useState<BookInfo>({
    id: 1,
    title: "",
    author: "",
    image: "",
    timeToRead: "",
    numberOfReads: "",
    status: {
      isFinished: false,
      isTrending: false,
      justAdded: false,
      isFeatured: false
    }
  });
  let handleMouseEnterEvent = () => {
    setIconStyle({
      fill: 'white',
      stroke: 'white'
    })
  }

  let handleMouseLeaveEvent = () => {
    setIconStyle({})
  }

  useEffect(() => {
    
    const retrieveBookById = async(val: number) => {
      if(val && val !== 0) {
        const book = await api.get(`/library/${val}`)
        const data = book.data
        setBookInfo(data)
        }}
    retrieveBookById(value)
  }, [value])


  let addToCurrentlyReading = async (num: number) => {
    // console.log("book: "+JSON.stringify(bookInfo))
   
      bookInfo.status.isFinished = false
    
    // bookInfo.status.isTrending = false
   
    
    await api.put(`/library/${num}`, bookInfo)
  }

  let updateFinish = async (num: number) => {
    if(bookInfo.status.isFinished) {
      bookInfo.status.isFinished = false
    }
    else {
      bookInfo.status.isFinished = true
      
    }

    await api.put(`/library/${num}`, bookInfo)
    }

  let navigate = useNavigate()
  let showDetailsPage = () => {
    navigate('/bookdetails')
  }
  
return (
    <ThemeProvider theme={theme}>
      <MainContainer onClick={onClick}>
        <ImageContainer>
          <img src={image} alt="Picture_" onClick={showDetailsPage}/>
        </ImageContainer>
        <InfoContainer>
          <Typography
            variant="subtitle1"
            sx={{ color: "#03314B" }}
            className={styles.title}
            onClick={showDetailsPage}
          >
            {title}
          </Typography>
          <Typography variant="body1" className={styles.author} onClick={showDetailsPage}>
            {author}
          </Typography>
        </InfoContainer>
        <OtherDetails>
          <TimeToReadDiv>
          {!timeToRead ? null : (
              <IconAndText iconSource={<Time />} title={timeToRead} variant="caption" />
            )}
          </TimeToReadDiv>
          <NumberOfReads>
          {!numberOfReads ? null : (
              <IconAndText iconSource={<User />} title={numberOfReads} variant="caption" />
            )}
          </NumberOfReads>
        </OtherDetails>

        {isFinished ? (
          
          
            <Typography variant="body1" className={styles.finished} onClick={() => updateFinish(value)}>
              Finished
              <PBar>
              <ProgressBar progress={30} />
              </PBar>
            </Typography>
            
            
          ) : null}

          {readAgain ? (
            <Typography variant="body1" className={styles.finished} onClick={() => updateFinish(value)}  data-testid="add">
              Read Again
              <PBar>
              <ProgressBar progress={100} />
              </PBar>
            </Typography>
          ) : null}

        {addToLibrary ? (
          <ButtonDiv data-testid="addtolibrary">
            <ButtonComponent startIcon={<Add style={iconStyle} />} className={styles.button} onClick={() => addToCurrentlyReading(value)} onMouseEnter={handleMouseEnterEvent} onMouseLeave={handleMouseLeaveEvent}>Add To Library</ButtonComponent>
          </ButtonDiv>
        ) : null}

        
      </MainContainer>
      
     
    </ThemeProvider>
  );
};