import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {HeaderComponent} from '../../organisms/Header/headerO'

export interface MyLibraryProps {
    header: React.ReactNode;
    footer: React.ReactNode,
    body: React.ReactNode;
}

let useStyles = makeStyles({
    test: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowX:"hidden"
    },
    // login: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     zIndex:0
    // }
})

export const MyLibrary = (props: MyLibraryProps) => {
    let {header, footer, body} = props
    let styles = useStyles()
    return (
        <>
        
        
        <div className={styles.test}>
        {header}
            <Box minHeight={500} marginRight={15}>
            {body}
            </Box>
            {footer}
        </div>
        </>
    )
}