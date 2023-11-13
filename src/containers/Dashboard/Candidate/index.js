import { Box, Container, Grid, Typography } from "@mui/material"
import { useState } from "react"
import { priceColor } from "../../../constants/Colors"
import useStyles from "../../../styles"
import { CandidateSidebar, CandidateDashboard, Resume, AppliedJobs, EditProfile, Favourite } from "./components"

const Candidate = () => {
    const [selectedPage, setSelectedPage] = useState("candidateDashboard")
    const [profileScore, setProfileScore] = useState(0)

    const classes = useStyles()
    return (
        <Box component="div">
            <Box component="div" sx={{
                background: priceColor,
                padding: "20px",
            }}>
                <Container >
                    <Typography variant="h1" className={classes.loginHeading}>
                        Candidate Dashboard
                    </Typography>
                </Container>

            </Box>
            <Box component="div" sx={{ marginTop: "60px" }}>

                <Container >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <CandidateSidebar profileScore={profileScore} setProfileScore={setProfileScore} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </Grid>
                        <Grid item xs={12} md={8}>
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
                        </Grid>
                    </Grid>

                </Container>
            </Box>

        </Box>
    )
}

export default Candidate