import { Box, Grid, Typography, AppBar, Tab } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useLayoutEffect, useState } from "react";
import All from "./All";
import useStyles from "../../../styles";
import { headerColor, secondaryColor } from "../../../constants/Colors";
import { getJobByType } from "../../../services/Jobs";


const FilterTabs = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    getLatestJobs(value)
  };

  useLayoutEffect(() => {
    getLatestJobs(value)
  }, [value]);

  const getLatestJobs = async (jobType) => {
    try {
      const res = await getJobByType(jobType);
      setJobs(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  }

  // const jobs = [
  //   {
  //     id: 1,
  //     title: "Frontend Developer",
  //     company: "Google",
  //     type: "Full Time",
  //     city: "New York",
  //     salary: "$1000",
  //     image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  //   },
  //   {
  //     id: 2,
  //     title: "Backend Developer",
  //     company: "Facebook",
  //     type: "Part Time",
  //     city: "Dallas",
  //     salary: "$2000",
  //     image: "https://www.facebook.com/images/fb_icon_325x325.png",
  //   },
  //   {
  //     id: 3,
  //     title: "Full Stack Developer",
  //     company: "Amazon",
  //     type: "Full Time",
  //     city: "New York",
  //     salary: "$3000",
  //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
  //   },
  //   {
  //     id: 4,
  //     title: "Buisness Developer",
  //     company: "Microsoft",
  //     type: "Part Time",
  //     city: "Dallas",
  //     salary: "$4000",
  //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
  //   }
  // ]

  return (
    <Box component="div" sx={{ marginTop: "80px" }}>

      <TabContext value={value}>

        <AppBar
          position="static"
          style={{
            backgroundColor: secondaryColor,
            color: "black",
            boxShadow: "none",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>

            <Typography variant="h1" sx={{ fontSize: "25px !important", fontWeight: "400 !important" }}>
              Latest Jobs
            </Typography>
            <TabList
              sx={{
                "& .MuiTabs-flexContainer": {
                  height: "10px",
                  ".MuiButtonBase-root": {
                    fontSize: "17px !important",
                    border: "0 !important",
                  },
                  ".Mui-selected": {
                    border: "solid #ccc !important",
                    borderWidth: "0px 0px !important",
                    color: "#4C8FBD !important",
                  },
                },
              }}
              className={classes.JobStatusTab}
              onChange={handleChange}
            >
              <Tab label="All" value="" />
              <Tab label="Part Time" value="PartTime" />
              <Tab label="Full Time" value="FullTime" />
            </TabList>
          </Box>
        </AppBar>
        <TabPanel value="">
          <All getLatestJobs={getLatestJobs} jobType={value} jobs={jobs} />
        </TabPanel>
        <TabPanel value="PartTime">
          <All jobs={jobs} />
        </TabPanel>
        <TabPanel value="FullTime">
          <All jobs={jobs} />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default FilterTabs