import "./App.css";
import { Route } from "react-router-dom";

import Layout from "./components/layout";
import Profile from "./pages/profile";
import Home from "./pages/home";

function App() {
  return (
    <Layout>
      <Route path="/" element={<Home />} />
      <Route path="/profile/*" element={<Profile />} />
    </Layout>
  );
}

export default App;
