import React from "react";
import {
  Grid,
  Container,
  Typography,
  Button,
  Tooltip,
  Box,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useStyles from "../../styles";
import { primaryColor, secondaryColor } from "../../constants/Colors";
import { useNavigate } from "react-router-dom";
import { logo } from "../../constants/Images";

const linksOne = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Find a Job",
    path: "/",
  },
  {
    id: 3,
    name: "Contact",
    path: "/",
  },
  {
    id: 4,
    name: "About",
    path: "/",
  },
  {
    id: 5,
    name: "Privacy Policy",
    path: "/releaseNotes",
  },
  {
    id: 6,
    name: "Terms and Conditions",
    path: "/press",
  },
  // {
  //   id: 7,
  //   name: "Careers",
  //   path: "/careers",
  // },
  // {
  //   id: 8,
  //   name: "Investor relations",
  //   path: "/investorRelations",
  // },
  // {
  //   id: 9,
  //   name: "Management Team",
  //   path: "/managementTeam",
  // },
];

const linksTwo = [
  {
    id: 1,
    name: "Videos",
    path: "/videos",
  },
  {
    id: 2,
    name: "Support",
    path: "/support",
  },
  {
    id: 3,
    name: "Testimonials",
    path: "/testimonials",
  },
  {
    id: 4,
    name: "Partners",
    path: "/partners",
  },
  {
    id: 5,
    name: "Booking",
    path: "/booking",
  },
  {
    id: 6,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 7,
    name: "Local",
    path: "/local",
  },
];

const AppFooter = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div style={{ background: secondaryColor, marginTop: "50px" }}>
      <Container maxWidth="xl">
        <div className={classes.footerContainer}>
          <Grid container spacing={3} justifyContent="space-between">
            <Grid item xs={12} sm={6} md={3}>
              <div>
                {/* <Typography variant="h5" className={classes.footerHead}>
                  <Typography variant="h6" noWrap component="div" sx={{ color: primaryColor, fontWeight: "bold", fontSize: "2.5rem" }}>
                    BHS
                  </Typography>
                </Typography> */}
                <img src={logo} alt="BHS Logo" style={{ width: "30%" }} />
                {/* <Typography variant="h6" component="div" sx={{ color: primaryColor, fontWeight: "bold", fontSize: "2rem", marginLeft: "10px" }}>
                  BHS
                </Typography> */}
                <Typography variant="body2" className={classes.footerTypo} sx={{ marginTop: "10px" }}>
                  What do all consultants need? In short, trust. This is achieved with professional presentation and the ability to communicate clearly with and potential clients.
                </Typography>

                <Button
                  onClick={() => navigate("/contactUs")}
                  variant="contaned" className={classes.footerBtnStyle}>
                  Contact Us
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Grid container justifyContent="space-between">
                <Grid item xs={12} md={5}>
                  <Typography variant="h3" className={classes.footerHead}>
                    Compnany
                  </Typography>
                  {linksOne.map((item) => {
                    return (
                      <Typography
                        variant="body2"
                        className={classes.footerTypo}
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate(item.path)}
                      >
                        {item.name}
                      </Typography>
                    );
                  })}
                </Grid>
                {/* <Grid item xs={12} md={4}>
                  <Typography variant="h3" className={classes.footerHead}>
                    Resources
                  </Typography>
                  {linksTwo.map((item) => {
                    return (
                      <Typography
                        variant="body2"
                        className={classes.footerTypo}
                        style={{ cursor: "pointer" }}
                      >
                        {item.name}
                      </Typography>
                    );
                  })}
                </Grid> */}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div>
                <Typography variant="h3" className={classes.footerHead}>
                  Contact
                </Typography>
                <Typography variant="body2" className={classes.footerTypo}>
                  Contact
                </Typography>
                <div className={classes.footerSocialContainer}>
                  <Tooltip title="Facebook" arrow placement="top">
                    <a style={{
                      textDecoration: "none",
                    }} href="https://www.facebook.com/profile.php?id=100089058866300&mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                      <FacebookIcon />
                    </a>
                  </Tooltip>
                  {/* <Tooltip title="Twitter" arrow placement="top">
                    <TwitterIcon />
                  </Tooltip> */}
                  <Tooltip title="Instagram" arrow placement="top">
                    <a style={{
                      textDecoration: "none",
                    }} href="#" rel="noreferrer">
                      <InstagramIcon />
                    </a>
                  </Tooltip>
                  <Tooltip title="LinkedIn" arrow placement="top">
                    <a style={{
                      textDecoration: "none",
                    }} href="#" rel="noreferrer">
                      <LinkedInIcon />
                    </a>
                  </Tooltip>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <div style={{ marginTop: "40px", borderTop: "1px solid #f2f2f2" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              margin: "10px 0 20px",
              display: "flex",
              alignItems: "center",
              flexWrap: { xs: "wrap" },
            }}
          >
            <Typography variant="span" className={classes.footerTypo}>
              Copyright © 2023 BHS
            </Typography>
            <Typography variant="body2" className={classes.footerPolicy}>
              Privacy policy
            </Typography>
            <Typography variant="body2" className={classes.footerPolicy}>
              Terms and Conditions
            </Typography>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default AppFooter;
