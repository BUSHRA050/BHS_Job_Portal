import { Typography,Box } from "@mui/material"
import useStyles from "../../../../styles"

const HeroCompanyCard = ({item}) =>{
    const classes = useStyles();
    return(
        <Box component="div" className={classes.HeroCompanyCard}>
            <Typography>
                {item.name}
            </Typography>
            <img src={item.logo} alt={item.name} style={{width:"80px",height:"80px",marginTop:"10px"}} />
        </Box>
    )
}

export default HeroCompanyCard