import { Box, Container, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useStyles from "../../../styles";
import SearchableDropdown from "../../SearchableDropwdown";
import TextInput from "../../TextInput";
import IconButton from "../../IconButton";
import { Search, Sell } from "@mui/icons-material";
import { primaryColor } from "../../../constants/Colors";
import HeroCompanyCard from "./HeroCompanyCards";
import "../../../styles/main.css"

const Hero = ({ jobDescriptionData, searchValue, setSearchValue, handleSearchValue, handleSearch, experienceData }) => {
    const classes = useStyles();
    const [selectedOption, setSelectedOption] = useState(null);


    const options = [{ value: undefined, label: "All", }];

    const Keyword = ["ui designer", "web developer", "graphic designer"];

    const compnayData = [
        {
            name: "Contour",
            logo: "https://contour-software.com/wp-content/uploads/2020/06/skin1.header-logo-hd.png",
        },
        {
            name: "Folio3",
            logo: "https://folio3.com/wp-content/themes/folio3/images/logo.png",
        },
        {
            name: "Zones, LLC",
            logo: "https://media.zones.com/images/new/zones-logo.png",
        },
        {
            name: "Creative Souls",
            logo: "https://pbs.twimg.com/profile_images/605474633475715072/gHWKJMnA_400x400.png",
        },
        {
            name: "Zepto Systems",
            logo: "https://zeptosystems.com/wp-content/uploads/2021/11/zepto-large.png",
        },
        {
            name: "arbisoft",
            logo: "https://careerjobs1737.com.pk/wp-content/uploads/2022/09/Arbisoft-Pakistan-Logo.jpg",
        }
    ]

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            background: "#fff",
            minHeight: "62px",
            fontSize: "12px",
            borderRadius: "0px",
            margin: "0",
            padding: "0"
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            padding: "0 6px",
        }),

        input: (provided, state) => ({
            ...provided,
            margin: "0px",
        }),

        indicatorSeparator: (state) => ({
            display: "none",
        }),

    };
    let KeywordArray = Keyword.join(", ");



    return (
        <Box sx={{ marginTop: "10px", height: "600px", padding: "20px 0px 20px 50px", position: "relative" }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Box component="div" sx={{ width: "90%" }}>

                        <Typography variant="h1" className={classes.heroHeading}>
                            The Easy Way To Get Your New Job
                        </Typography>
                        <Typography sx={{
                            marginTop: "20px",
                        }} variant="h2" className={classes.heroSubHeading}>
                            BHS provides a platform for both job seekers and organizations to fulfill their needs.The portal provides employment opportunities to the job seekers and reduces the effort of searching job of desired position.It facilitates the organization by filtering all the appropriate resumes according to the job description which eventually minimizes human resource work and screening process.
                        </Typography>
                    </Box>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={12} md={6}>
                            <TextInput
                                value={searchValue.keyword}
                                onChange={(e) => handleSearchValue(e)}
                                name="keyword"
                                className={classes.heroInput} placeholder="Keyword e.g. (Job Title, Description, Tags)" />
                            <Box component="div" sx={{ marginTop: "10px" }}>
                                <TextInput
                                    value={searchValue.location}
                                    onChange={(e) => handleSearchValue(e)}
                                    name="location"
                                    className={classes.heroInput} placeholder="Ex: Karachi" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                isNumber
                                onChange={(e) => handleSearchValue(e)}
                                className={classes.heroInput}
                                id="experience"
                                value={searchValue?.experience}
                                select
                                name="experience"
                                label="Select Experience"
                            >
                                {experienceData?.map((item) => {
                                    return <MenuItem value={item?.value}>{item.label}</MenuItem>;
                                })}
                            </TextField>
                            <Box component="div" sx={{ marginTop: "10px" }}>
                                <TextField
                                    isNumber
                                    onChange={(e) => handleSearchValue(e)}
                                    className={classes.heroInput}
                                    id="jobDescription"
                                    value={searchValue?.jobDescription}
                                    select
                                    name="jobDescription"
                                    label="Select Job Description"
                                >
                                    {jobDescriptionData?.map((item) => {
                                        return <MenuItem value={item?.value}>{item.label}</MenuItem>;
                                    })}
                                </TextField>
                            </Box>
                        </Grid>
                    </Grid>
                    <IconButton onClick={handleSearch} className={classes.heroBtn} icon={<Search />}>
                        Search
                    </IconButton>
                    <Box component="div" sx={{ marginTop: "40px", display: "flex", alignItems: "center" }}>
                        <Sell sx={{ color: primaryColor }} />
                        <Typography variant="h3" className={classes.heroSubHeading}>
                            Trending Keywords :
                        </Typography>
                        <Typography variant="h3" className={classes.heroSubHeading} sx={{ marginTop: "0px", marginLeft: "5px" }}>
                            {KeywordArray}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: { xs: 'none', md: "block" } }} className="heroAnimatedWrapper">
                    </Box>
                </Grid>
            </Grid>
            <Container maxWidth="xl">
                <Grid container spacing={2} marginTop={2} sx={{ display: { xs: 'none', md: 'flex' }, position: "absolute", bottom: "-140px", left: "0px", right: "0px", width: "80%", margin: "0 auto" }}>
                    {
                        compnayData.map((item, index) => {
                            return (
                                <Grid item xs={12} md={2} key={index}>
                                    <HeroCompanyCard item={item} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box>
    );
}

export default Hero;