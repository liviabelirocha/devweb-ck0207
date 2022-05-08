import React from "react";

// import { AuthProvider } from "./auth";
import { MatchProvider } from "./match";

function AppProvider({ children }) {
  return (
    <MatchProvider>
      {children}
      {/* //     <AuthProvider>{children}</AuthProvider> */}
    </MatchProvider>
  );
}

export { AppProvider };
