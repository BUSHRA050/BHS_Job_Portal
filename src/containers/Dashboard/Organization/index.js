import { Box, Container, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { priceColor, primaryColor } from "../../../constants/Colors";
import useStyles from "../../../styles";
import logo from "../../../assets/logo.png"
import LogoutIcon from '@mui/icons-material/Logout';
import {
  CompanySidebar,
  CompanyDashboard,
  CompanyPage,
  Applications,
  EditProfile,
  ManageJobs,
  PostNewJob,
} from "./components";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { AppContext } from "../../../context";

const Organization = () => {
  const [selectedPage, setSelectedPage] = useState("candidateDashboard");
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobData, setJobData] = useState(null);
  const [applicationData, setApplicationData] = useState(null);
  const {logout}=useContext(AppContext)
  const page = searchParams.get('page')
  useEffect(()=>{
    if(page == null){
      setSearchParams({ 'page': 'candidateDashboard' });
    }
  },[])


  const classes = useStyles();

  return (
    <>
    <div className="organizer">
      
 
    {/* <Box component="div"> */}
      <Box
        component="div"
        sx={{
          background: primaryColor,
          padding: "20px",
        }}
        >

       
                <div className="container-fluid" color={primaryColor} >
                <div className="row"> 
                  <div className="col-md-6">
                    <div className="text-start d-flex align-items-center gap-3">
                     <Link to="/">
                     <img  src={logo} alt={logo} className="img-flui " style={{width:"100px"}}  />
                     </Link>
                    <Typography variant="body2" className="fs-2 text-white"  >
                        Company Dashboard 
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


        <div className="container-fluid mt-4">
          <div className="row ">
            <div className="col-md-3">
            <CompanySidebar
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setJobData={setJobData}
                setApplicationData={setApplicationData}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                />
            </div>
            <div className="col-md-9">
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
            </div>
          </div>
        </div>



      <Box component="div" sx={{ marginTop: "60px" }} className="d-none"> 
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
    {/* </Box> */}
    </div>
    </>
  );
};

export default Organization;
