import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext();

const UserContexProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem("userToken"));
  const [Auth, setAuth] = useState(null);
  const getUserData = () => {
    if (userToken != null) {
      const decoded = jwtDecode(userToken);
      console.log(decoded);
      setAuth(decoded);
    }
  };
  


useEffect(() => {
    getUserData();
  }, [userToken]);

  return (
    <UserContext.Provider
      value={{
        userToken,
        Auth,
        setUserToken,
        getUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContexProvider;
