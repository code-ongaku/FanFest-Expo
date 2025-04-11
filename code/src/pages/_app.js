import "@/styles/globals.css";
import { createContext, useState } from "react";

// Create a Context for user state
export const UserContext = createContext();

export default function App({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState("guest");

  const [signUp, setSignUp] = useState({
    username: "dandan23",
    name: "Daniel Smith",
  });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser , signUp, setSignUp }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
