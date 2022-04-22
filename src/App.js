import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import AuthProvider from "./Context/AuthProvider";
import NotFound from "./Components/NotFound/NotFound";
import HospitalDetails from "./Components/HospitalDetails/HospitalDetails";
import RequiredAuth from "./Components/RequiredAuth/RequiredAuth";
import Home from "./Pages/Home/Home";
import AppointmentPage from "./Pages/AppointmentPage/AppointmentPage";
import DashBoardMain from "./Pages/DashBoardMain/DashBoardMain";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import AddDoctorDashBoard from "./Components/AddDoctorDashBoard/AddDoctorDashBoard";
import DashBoardHome from "./Components/DashBoardHome/DashBoardHome";
import AdminRoute from "./Components/AdminRoute/AdminRoute";
import DoctorDetails from "./Pages/DoctorDetails/DoctorDetails";
import Contact from "./Pages/Contact/Contact";
import DoctorsList from "./Components/DoctorsList/DoctorsList";
import AddFeedBack from "./Components/AddFeedBack/AddFeedBack";
import FeedbackList from "./Components/FeedbackList/FeedbackList";
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#19ce67",
      dark: "#19ce67",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffffff",
      main: "#000000",
      dark: "#000",
      contrastText: "#000",
    },
  },
  
});


function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/appointment"
              element={
                <RequiredAuth>
                  <AppointmentPage />
                </RequiredAuth>
              }
            />
            <Route
              path="/dashboard"
              element={
                <RequiredAuth>
                  <DashBoardMain />
                </RequiredAuth>
              }
            />
            <Route exact path="/dashboard" element={<DashBoardMain />}>
              <Route exact path="/dashboard" element={<DashBoardHome />} />
              <Route
                exact
                path="/dashboard/makeadmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                exact
                path="/dashboard/addDoctor"
                element={
                  <AdminRoute>
                    <AddDoctorDashBoard />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/doctorslist"
                exact
                element={
                  <AdminRoute>
                    <DoctorsList />
                  </AdminRoute>
                }
              />
              <Route
                exact
                path="/dashboard/addfeedback"
                element={
                  <RequiredAuth>
                    <AddFeedBack />
                  </RequiredAuth>
                }
              />
              <Route
                exact
                path="/dashboard/allfeedback"
                element={
                  <RequiredAuth>
                    <FeedbackList />
                  </RequiredAuth>
                }
              />
            </Route>
            <Route
              path="/hospital-details/:detailsId"
              element={
                <RequiredAuth>
                  <HospitalDetails></HospitalDetails>
                </RequiredAuth>
              }
            />
            <Route path="/doctor/:id" element={<DoctorDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login></Login>} />
            <Route
              path="/registration"
              element={<Registration></Registration>}
            />
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
