import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

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