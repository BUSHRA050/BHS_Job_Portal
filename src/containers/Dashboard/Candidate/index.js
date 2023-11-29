import { Box, Container, Grid, Typography} from "@mui/material"
import { useContext, useState } from "react"
import { priceColor, primaryColor } from "../../../constants/Colors"
import useStyles from "../../../styles"
import { CandidateSidebar, CandidateDashboard, Resume, AppliedJobs, EditProfile, Favourite } from "./components"
import { Link, useLocation, } from "react-router-dom"
import FindAJob from "../../FindAJob"
import CoverLetterComponent from "./components/CoverLetterComponent"
import logo from "../../../assets/logo.png"
import LogoutIcon from '@mui/icons-material/Logout';
import { AppContext } from "../../../context"

const Candidate = () => {
    const [selectedPage, setSelectedPage] = useState("candidateDashboard")
    const [profileScore, setProfileScore] = useState(0)
    const {logout}=useContext(AppContext)
     const classes = useStyles()
     const location=useLocation()
    return (
         <div className="dashboard">
              <Box component="div" sx={{
                background: primaryColor,
                padding: "20px",
            }}>
                {/* <Container >
                    <Typography variant="h1" className={classes.loginHeading}>
                        Candidate Dashboard salman
                    </Typography>
                </Container> */}


                
                 <div className="container-fluid" >
                <div className="row">
                  <div className="col-md-6">
                    <div className="text-start d-flex align-items-center gap-3">
                     <Link to="/">
                     <img  src={logo} alt={logo} className="img-flui " style={{width:"100px"}}  />
                     </Link>
                    <Typography variant="body2" className="fs-2 text-white"  >
                        Candidate Dashboard 
                    </Typography>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                  <div className="text-end ">
                    <div className="pt-3" onClick={()=>logout()}>
                     
                     <LogoutIcon className="fw-bold"/> LOG OUT
                     
                     <Typography>
                        
                     </Typography>
                    </div>
                    </div>
                  </div>
                </div>
                </div>
        

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
                                                    selectedPage == "coverLetter" ? <CoverLetterComponent profileScore={profileScore} setProfileScore={setProfileScore} />
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