import Header from "./components/Header";
import Home from "./containers/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppFooter from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register"
import AppProvider from "./context"
import { SnackbarProvider } from "notistack";
import { useRef } from "react";
import { ProtectedLayout } from "./utils/ProtectedLayout";
import ResetPassword from "./containers/ResetPassword";
import PlanPayment from "./containers/PlanPayment";
import Resume from "./components/Resume";


function App() {
  const providerRef = useRef();
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
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/findAJob" element={<FindAJob />} />
              <Route path="/dashboard" element={<ProtectedLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/pricingPlan" element={<PlanPayment />} />
                <Route path="/dashboard/resume/:id" element={<Resume />} />

              </Route> */}
            </Routes>
            <AppFooter />
          </div>
        </SnackbarProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
