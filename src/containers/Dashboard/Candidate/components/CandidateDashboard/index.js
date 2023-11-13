import { useState } from "react"
import { Adb, Android, Email, Info, LocationOn, Work } from "@mui/icons-material"
import { Box, Grid, Typography } from "@mui/material"
import { useContext } from "react"
import { useEffect } from "react"
import IconButton from "../../../../../components/IconButton"
import { headerColor, primaryBorderColor, primaryColor, textColor } from "../../../../../constants/Colors"
import { profile } from "../../../../../constants/Images"
import useStyles from "../../../../../styles"
import { AppContext } from '../../../../../context';
import { useLayoutEffect } from "react"
import { getAppliedJobsById, getFavouriteJobsById } from "../../../../../services/Jobs"

const CandidateDashboard = () => {
    const { user } = useContext(AppContext)
    const [favouriteJobs, setFavouriteJobs] = useState([])
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(() => {
        window.scrollTo({ top: 100, behavior: "smooth" })
    }, [])
    const classes = useStyles()

    useLayoutEffect(() => {
        getFavouriteData()
        getAppliedJobsData()
    }, [])

    const getFavouriteData = async () => {
        try {
            const response = await getFavouriteJobsById(user._id)
            setFavouriteJobs(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getAppliedJobsData = async () => {
        try {
            const response = await getAppliedJobsById({ userId: user._id })
            setAppliedJobs(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box component="div">
            <Box component="div" sx={{
                border: `1px solid ${primaryBorderColor}`,
                padding: "25px"
            }}>
                <Grid container justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                        <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
                            <img src={user?.userImage} style={{ width: "40%", height: "100px" }} />
                            <Box component="div" ml={2}>
                                <Typography variant="h1" sx={{ fontSize: "22px !important", fontWeight: "400 !important" }}>
                                    {
                                        user?.name
                                    }
                                </Typography>
                                <Box component="div" sx={{ display: "flex", alignItems: "center", width: "20rem", gap: "10px", marginTop: "10px" }}>
                                    <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
                                        {
                                            user?.jobDescription && (
                                                <>
                                                    <Adb sx={{ color: primaryColor }} />
                                                    <Typography variant="h3" sx={{ fontSize: "16px !important", fontWeight: "400 !important", color: textColor }}>
                                                        {
                                                            user?.jobDescription
                                                        }
                                                    </Typography>
                                                </>
                                            )
                                        }

                                    </Box>
                                    <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
                                        {
                                            user?.address && (
                                                <>
                                                    <LocationOn sx={{ color: primaryColor }} />
                                                    <Typography variant="h3" sx={{ fontSize: "16px !important", fontWeight: "400 !important", color: textColor }}>
                                                        {
                                                            user?.address
                                                        }
                                                    </Typography>
                                                </>
                                            )
                                        }

                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    {/* <Grid item xs={12} md={3}>
                        <IconButton sx={{ height: "20px !important" }} className={classes.heroBtn}>
                            View Profile
                        </IconButton>
                    </Grid> */}
                </Grid>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box component="div" sx={{
                        border: `1px solid ${primaryBorderColor}`,
                        marginTop: "30px"
                    }}>
                        <Box component="div" sx={{
                            background: primaryColor,
                            padding: "20px"
                        }}>
                            <Typography variant="h1" sx={{ fontSize: "18px !important", fontWeight: "400 !important", color: headerColor }}>
                                Candidate Information
                            </Typography>
                        </Box>

                        <Box component="div" sx={{ padding: "30px" }}>
                            {
                                (user?.city && user?.country) && (
                                    <Box component="div" sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                                        <LocationOn sx={{ color: primaryColor }} />
                                        <Box component="div">
                                            <Typography variant="h3" sx={{ fontSize: "20px !important", fontWeight: "400 !important" }}>
                                                Location
                                            </Typography>
                                            <Typography variant="h3" sx={{ fontSize: "15px !important", fontWeight: "400 !important", color: primaryColor, marginTop: "5px" }}>
                                                {
                                                    `${user?.city}, ${user?.country}`
                                                }
                                            </Typography>
                                        </Box>
                                    </Box>
                                )
                            }

                            <Box component="div" sx={{ display: "flex", gap: "10px", marginTop: (user?.city && user?.country) ? "40px" : "0px" }}>
                                <Info sx={{ color: primaryColor }} />
                                <Box component="div">
                                    <Typography variant="h3" sx={{ fontSize: "20px !important", fontWeight: "400 !important" }}>
                                        Phone
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontSize: "15px !important", fontWeight: "400 !important", color: primaryColor, marginTop: "5px" }}>
                                        {user?.phoneNumber}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box component="div" sx={{ display: "flex", gap: "10px", marginTop: "40px" }}>
                                <Email sx={{ color: primaryColor }} />
                                <Box component="div">
                                    <Typography variant="h3" sx={{ fontSize: "20px !important", fontWeight: "400 !important" }}>
                                        Email:
                                    </Typography>
                                    <Typography variant="h3" sx={{ fontSize: "15px !important", fontWeight: "400 !important", color: primaryColor, marginTop: "5px" }}>
                                        {user?.email}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="div" sx={{ display: "flex", border: `1px solid ${primaryBorderColor}`, marginTop: "30px" }}>
                        <Box component="div" sx={{ padding: "20px", background: "#ff9500" }}>
                            <Work sx={{ color: headerColor }} />
                        </Box>
                        <Box component="div" sx={{ padding: "15px 0px 0px 20px" }}>
                            <Typography variant="h1" sx={{ fontSize: "18px !important", fontWeight: "600 !important" }}>
                                {
                                    appliedJobs?.length
                                }
                            </Typography>
                            <Typography variant="h3" sx={{ fontSize: "15px !important", fontWeight: "400 !important", color: textColor, marginTop: "5px" }}>
                                Applied Jobs
                            </Typography>
                        </Box>
                    </Box>
                    <Box component="div" sx={{ display: "flex", border: `1px solid ${primaryBorderColor}`, marginTop: "30px" }}>
                        <Box component="div" sx={{ padding: "20px", background: "#76c80e" }}>
                            <Work sx={{ color: headerColor }} />
                        </Box>
                        <Box component="div" sx={{ padding: "15px 0px 0px 20px" }}>
                            <Typography variant="h1" sx={{ fontSize: "18px !important", fontWeight: "600 !important" }}>
                                {
                                    favouriteJobs?.length
                                }
                            </Typography>
                            <Typography variant="h3" sx={{ fontSize: "15px !important", fontWeight: "400 !important", color: textColor, marginTop: "5px" }}>
                                Favourite Jobs
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CandidateDashboard