import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get('/profile')
        .then(({ data }) => {
          setUser(data);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [user]);

  const signOut = () => {
    // Perform sign-out logic here, e.g., clear user data, logout API request, etc.
    setUser(null);
    // Optionally, you can redirect the user to the sign-in page
  };

  return (
    <UserContext.Provider value={{ user, setUser, error, signOut }}>
      {children}
    </UserContext.Provider>
  );
}
