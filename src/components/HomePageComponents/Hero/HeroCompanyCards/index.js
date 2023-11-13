import { Typography,Box } from "@mui/material"
import useStyles from "../../../../styles"

const HeroCompanyCard = ({item}) =>{
    const classes = useStyles();
    return(
        <Box component="div" className="bg-white text-center p-3">
            <Typography variant="h6" style={{fontSize:"16px"}} >
                {item.name}
            </Typography>
            <img src={item.logo} alt={item.name} style={{width:"80px"}} />
        </Box>
    )
}

export default HeroCompanyCard