import { AccountBalance, Adb, CloudDownload, Email, FavoriteBorder, LocationOn, Money, PanoramaFishEye, RemoveRedEye, Work } from "@mui/icons-material"
import { Box, Button, Grid, Typography } from "@mui/material"
import { createRef, useState } from "react"
import { useContext } from "react"
import { useLayoutEffect } from "react"
import { useEffect } from "react"
import IconButton from "../../../../../components/IconButton"
import { headerColor, primaryBorderColor, primaryColor, textColor } from "../../../../../constants/Colors"
import { profile } from "../../../../../constants/Images"
import { AppContext } from "../../../../../context"
import { getAppliedJobsById } from "../../../../../services/Jobs"
import useStyles from "../../../../../styles"
import ReactToPdf from "react-to-pdf"
import Resume from "../../../../../components/Resume"
import { useNavigate } from "react-router-dom"

const Applications = ({ applicationData }) => {
    const { user } = useContext(AppContext);
    const navigate = useNavigate()
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(() => {
        window.scrollTo({ top: 100, behavior: "smooth" })
    }, [])

    const classes = useStyles()

    const favoriteJob = [
        {
            id: 1,
            jobTitle: "Application Developer",
            company: "Google",
            salary: "12000",
            location: "Los Angeles, Calefornia",
            jobType: "Part Time",
            isApplied: true,
            userName: "luca wallace"
        },
        {
            id: 2,
            jobTitle: "Web Developer",
            company: "Google",
            salary: "20000",
            location: "Los Angeles, Calefornia",
            jobType: "Full Time",
            isApplied: true,
            userName: "lumi simon"

        },
    ]

    useLayoutEffect(() => {
        if (applicationData) {
            setAppliedJobs(applicationData)
        }
    }, [applicationData])

    useLayoutEffect(() => {
        if (!applicationData?.length === 0 || applicationData?.length === undefined) {
            getAppliedJobsData()
        }
    }, [])

    const getAppliedJobsData = async () => {
        try {
            const response = await getAppliedJobsById({ companyId: user._id })
            let temp;
            response.data.data.slice(-5).map((item) => {
                temp = item?.appliedCandidate
            })
            setAppliedJobs(temp)
        } catch (error) {
            console.log(error)
        }

    }

    console.log(appliedJobs, "compnayDetailscompnayDetails")


    return (
        <Box component="div">
            <Box component="div" sx={{
                background: primaryColor,
                padding: "20px"
            }}>
                <Typography variant="h1" sx={{ fontSize: "18px !important", fontWeight: "400 !important", color: headerColor }}>
                    Recent Applications
                </Typography>
            </Box>
            {
                appliedJobs?.map((item, index) => {
                    return (
                        <Box
                            key={index}
                            component="div" sx={{
                                border: `1px solid ${primaryBorderColor}`,
                                padding: "25px",
                                marginTop: "20px"
                            }}>
                            <Grid container justifyContent="space-between" alignItems="center" >
                                <Grid item xs={12} md={4}>
                                    <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
                                        <Box component="div" sx={{ textAlign: "center" }}>
                                            <img src={item?.userDetails?.userImage} style={{ width: "80px" }} />
                                        </Box>
                                        <Box component="div" ml="5px">
                                            <Typography variant="h3" sx={{ fontSize: "18px !important", fontWeight: "600 !important" }}>
                                                {item?.userDetails?.name}
                                            </Typography>
                                            <Box component="div" sx={{ display: "flex", alignItems: "center", width: "22rem", gap: "10px", marginTop: "10px" }}>
                                                <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
                                                    <Work sx={{ color: primaryColor }} />
                                                    <Typography variant="h3" sx={{ fontSize: "14px !important", fontWeight: "400 !important", color: textColor }}>
                                                        {item?.resume?.jobDescription}
                                                    </Typography>
                                                </Box>
                                                <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
                                                    <LocationOn sx={{ color: primaryColor }} />
                                                    <Typography variant="h3" sx={{ fontSize: "14px !important", fontWeight: "400 !important", color: textColor }}>
                                                        {item?.resume?.location}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={5} display="flex" justifyContent="center">
                                    <Box component="div" sx={{ display: "flex", alignItems: "center", gap: "10px" }}>


                                        <Box
                                            sx={{
                                                cursor: "pointer",
                                                border: `1px solid ${primaryBorderColor}`,
                                                gap: "10px",
                                                fontSize: "14px",
                                                padding: "7px",
                                                marginTop: "10px",
                                                "&:hover": {
                                                    background: primaryColor,
                                                    color: headerColor,
                                                    transition: "all 0.3s ease-in-out"
                                                },

                                            }}
                                            display="flex" alignItems="center" p={2} component='div'
                                            onClick={() => {
                                                navigate(`/dashboard/resume/${item?.resume?._id}`)
                                            }}
                                        >
                                            <RemoveRedEye />
                                            View Resume
                                        </Box>
                                        {/* <Box component="div">
                                            <IconButton icon={<Email sx={{ fontSize: "20px" }} />} padding="10px" width="90px" height="40px" className={classes.heroBtn}>
                                                Send
                                            </IconButton>
                                        </Box> */}
                                    </Box>


                                </Grid>
                            </Grid>
                        </Box>
                    )
                })
            }

        </Box >
    )
}

export default Applications