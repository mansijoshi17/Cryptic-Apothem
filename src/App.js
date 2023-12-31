// routes
import Router from "./routes";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
// components
import ScrollToTop from "./components/ScrollToTop"; 
import { ToastContainer } from "react-toastify";
import "./global.css";


// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ToastContainer />
      <ScrollToTop />
      <GlobalStyles /> 
      <Router />

    </ThemeConfig>
  );
}
