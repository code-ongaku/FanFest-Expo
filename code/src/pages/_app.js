import "@/styles/globals.css";
import { createContext, useState } from "react";

// Create a Context for user state
export const UserContext = createContext();

export default function App({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState("guest");

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
