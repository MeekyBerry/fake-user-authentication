import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { Home, Navigation, Booking, FallBack, Error } from "./components";
import { Login, User, Logout, Register } from "./profile";
import RequireAuth from "./profile/context/require";
import { AuthProvider } from "./profile/context/auth";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallBack}>
        <Navigation />
        <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login">
            <Route index element={<Login />} />
          </Route>
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </AuthProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
