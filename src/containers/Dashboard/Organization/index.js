import { Box, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { priceColor } from "../../../constants/Colors";
import useStyles from "../../../styles";
import {
  CompanySidebar,
  CompanyDashboard,
  CompanyPage,
  Applications,
  EditProfile,
  ManageJobs,
  PostNewJob,
} from "./components";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Organization = () => {
  const [selectedPage, setSelectedPage] = useState("candidateDashboard");
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobData, setJobData] = useState(null);
  const [applicationData, setApplicationData] = useState(null);
  const page = searchParams.get('page')
  useEffect(()=>{
    if(page == null){
      setSearchParams({ 'page': 'candidateDashboard' });
    }
  },[])


  const classes = useStyles();

  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          background: priceColor,
          padding: "20px",
        }}
      >
        <Container>
          <Typography variant="h1" className={classes.loginHeading}>
            Company Dashboard
          </Typography>
        </Container>
      </Box>
      <Box component="div" sx={{ marginTop: "60px" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <CompanySidebar
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setJobData={setJobData}
                setApplicationData={setApplicationData}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              {page == "candidateDashboard" ? (
                <CompanyDashboard />
              ) : page == "editProfile" ? (
                <EditProfile />
              ) : page == "companyPage" ? (
                <CompanyPage />
              ) : page == "manageJobs" ? (
                <ManageJobs
                  setApplicationData={setApplicationData}
                  setJobData={setJobData}
                  setSelectedPage={setSelectedPage}
                  setSearchParams={setSearchParams}
                />
              ) : page == "applications" ? (
                <Applications applicationData={applicationData} />
              ) : page == "postNewJob" ? (
                <PostNewJob jobData={jobData} />
              ) : null}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Organization;
