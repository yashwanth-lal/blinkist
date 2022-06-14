import { Box, Typography } from "@mui/material";
import DropDownArrow from "../../../images/dropdownarrow.svg";
import {Avatar} from "@mui/material";
import { Icons } from "../../atoms/Icon/iconA";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main: {
    display: 'flex', 
    flexDirection: 'row', 
    gap: '1px 1px'
  },
  typography: {
    alignSelf: "center",
    fontFamily: "sans-serif",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#03314B",
  },
  dropdownarrow: {
    width: 10.61,
    height: 6.48,
    alignSelf: 'center',
    marginLeft: 6.7,
    '&:hover': {
      cursor: 'pointer'
    },
  }
})

export interface DropdownProps {
    letter?:string,
    title?: string,
    style?: React.CSSProperties;
    className?: string;
    onClick?: () => void;
}

export const Dropdown = (props: DropdownProps) => {
  let styles = useStyles()
  let {letter,title, style, className, onClick} = props
  return (
    <>
      <Box className={`${styles.main} ${className}`} >
        {title === 'Account' ? (
          <div  data-testid='Avatar'>
          <Avatar sx={{bgcolor: "#69A6E3"}} alt="avatarLogo">{letter}</Avatar>
          </div>
        ) : (
            <Typography variant='body1' className={styles.typography}>
                {title}
            </Typography>
        )}

        <Icons onClick={onClick} style={style} className={styles.dropdownarrow}  source={DropDownArrow} />
      </Box>
    </>
  );
};
