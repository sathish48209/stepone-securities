import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/shared/Footer";
import ResponsiveAppBar from "./components/shared/ResponsiveAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: "Red Hat Text, Arial, Helvetica, 'sans-serif'",
  },
  palette: {
    primary: {
      main: "#24a7df",
      light: "#ebf6fb",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
