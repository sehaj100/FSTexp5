import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";

// 5 sec delay
const delayImport = (component) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(component()), 5000);
  });
};

// Route Based Lazy Loading
const Dashboard = lazy(() => delayImport(() => import("./pages/Dashboard")));
const Profile = lazy(() => delayImport(() => import("./pages/Profile")));
const Settings = lazy(() => delayImport(() => import("./pages/Settings")));

function App() {
  return (
    <div>
      <h1>Route Based Lazy Loading</h1>

      <nav>
        <Link to="/dashboard">Dashboard</Link> |
        <Link to="/profile">Profile</Link> |
        <Link to="/settings">Settings</Link>
      </nav>

      <Suspense fallback={<h2>Loading Page... ⏳</h2>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;