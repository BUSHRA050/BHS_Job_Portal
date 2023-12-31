import Header from "./components/Header";
import Home from "./containers/Home";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppFooter from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import ContactUs from "./containers/ContactUs";
import AboutUs from "./containers/AboutUs";
import FindAJob from "./containers/FindAJob";
import Dashboard from "./containers/Dashboard";
import AppProvider from "./context"
import { SnackbarProvider } from "notistack";
import { useRef } from "react";
import { ProtectedLayout } from "./utils/ProtectedLayout";
import ResetPassword from "./containers/ResetPassword";
import PlanPayment from "./containers/PlanPayment";
// import Resume from "./components/Resume";
import ResumeTwo from "./components/ResumeTwo";
import ViewResume from "./containers/ViewResume";
import ViewCoverLetter from "./containers/ViewCoverLetter";



function App() {
  const providerRef = useRef();
  const location=useLocation()
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Lato",
        "sans-serif",
        // '"Apple Color Emoji"',
        // '"Segoe UI Emoji"',
        // '"Segoe UI Symbol"',
      ].join(","),
    },
    button: {
      fontFamily: ["Lato", "sans-serif"].join(","),
    },
  });
  return (

    <ThemeProvider theme={theme}>
      <AppProvider>
        <SnackbarProvider ref={providerRef} maxSnack={3}>
          <div>
            
            {location.pathname !== "/dashboard" && <Header />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/findAJob" element={<FindAJob />} />
              <Route path="/dashboard" element={<ProtectedLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/pricingPlan" element={<PlanPayment />} />
                {/* <Route path="/dashboard/resume/:id" element={<Resume />} /> */}
                <Route path="/dashboard/resume/:id" element={<ViewResume />} />
                <Route path="/dashboard/coverLetter/:id" element={<ViewCoverLetter />} />

              </Route>
            </Routes>
            <AppFooter />
          </div>
        </SnackbarProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
