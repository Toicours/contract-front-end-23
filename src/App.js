// App.js
import React from "react";
import { Web3OnboardProvider } from "@web3-onboard/react";
import onboard from "./initOnboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./NavBar";
import Swap from "./pages/Swap";
import Liquidity from "./pages/Liquidity";
import Farm from "./pages/Farm";
import "./styles.css";

const App = () => {
  return (
    <Web3OnboardProvider web3Onboard={onboard}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/swap" />} />{" "}
          {/* Redirect to /swap */}
          <Route path="/swap" element={<Swap />} />
          <Route path="/liquidity" element={<Liquidity />} />
          <Route path="/farm" element={<Farm />} />
        </Routes>
      </Router>
    </Web3OnboardProvider>
  );
};

export default App;
