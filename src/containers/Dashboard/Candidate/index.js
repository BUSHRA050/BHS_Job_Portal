import { Box, Container, Grid, Typography} from "@mui/material"
import { useState } from "react"
import { priceColor, primaryColor } from "../../../constants/Colors"
import useStyles from "../../../styles"
import { CandidateSidebar, CandidateDashboard, Resume, AppliedJobs, EditProfile, Favourite } from "./components"
import { useLocation, } from "react-router-dom"
import FindAJob from "../../FindAJob"

const Candidate = () => {
    const [selectedPage, setSelectedPage] = useState("candidateDashboard")
    const [profileScore, setProfileScore] = useState(0)
     const classes = useStyles()
     const location=useLocation()
    return (
         <div className="dashboard">
              <Box component="div" sx={{
                background: primaryColor,
                padding: "20px",
            }}>
                <Container >
                    <Typography variant="h1" className={classes.loginHeading}>
                        Candidate Dashboard
                    </Typography>
                </Container>

            </Box>
             <div className="container-fluid">
               <div className="row mt-4">
                <div className="col-md-3">
                <CandidateSidebar profileScore={profileScore} setProfileScore={setProfileScore} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div className="col-md-9">
                {
                                selectedPage == "candidateDashboard" ? <CandidateDashboard />
                                    :
                                    selectedPage == "editProfile" ? <EditProfile />
                                        :
                                        selectedPage == "resume" ? <Resume profileScore={profileScore} setProfileScore={setProfileScore} />
                                            :
                                            selectedPage == "favourite" ? <Favourite />
                                                :
                                                selectedPage == "appliedJobs" ? <AppliedJobs />
                                                    :
                                                    null
                }
                </div>
               </div>
             </div>
         </div>
        // <>
        //     <Box component="div" sx={{
        //         background: primaryColor,
        //         padding: "20px",
        //     }}>
        //         <Container >
        //             <Typography variant="h1" className={classes.loginHeading}>
        //                 Candidate Dashboard
        //             </Typography>
        //         </Container>

        //     </Box>
        //     <Box component="" sx={{ marginTop: "60px", }}    >
        //         <Container >
        //             <Grid container  spacing={1}>
        //                 <Grid item xs={12} md={2}>
        //                     <CandidateSidebar profileScore={profileScore} setProfileScore={setProfileScore} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        //                 </Grid>
        //                 <Grid item xs={12} md={10} className="bg-dark" >

        //                 </Grid>
        //                 {/* <Grid item xs={12} md={8} className="" >
        //                     {
        //                         selectedPage == "candidateDashboard" ? <CandidateDashboard />
        //                             :
        //                             selectedPage == "editProfile" ? <EditProfile />
        //                                 :
        //                                 selectedPage == "resume" ? <Resume profileScore={profileScore} setProfileScore={setProfileScore} />
        //                                     :
        //                                     selectedPage == "favourite" ? <Favourite />
        //                                         :
        //                                         selectedPage == "appliedJobs" ? <AppliedJobs />
        //                                             :
        //                                             null
        //                     }
        //                 </Grid> */}
        //             </Grid>

        //         </Container>
        //     </Box>
        //     </>
    )
}

export default Candidate