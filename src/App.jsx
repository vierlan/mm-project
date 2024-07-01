import { HashRouter as Router, Routes, Route  } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SigninPage from "./pages/SigninPage";
import SignupForm from "./pages/SignupForm";
import Layout from "./Layout";
import Spaces from "./pages/Spaces";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/spaces" element={<Spaces />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
