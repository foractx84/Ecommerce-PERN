import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser } from '../features/auth/api/authApi';

const AuthContext = createContext(null);

// Initialize auth state from localStorage synchronously
function initializeAuthState() {
  try {
    const storedToken = localStorage.getItem('accessToken');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      return {
        accessToken: storedToken,
        user: JSON.parse(storedUser),
      };
    }
  } catch (err) {
    console.error('Error reading auth from storage:', err);
  }

  return {
    accessToken: null,
    user: null,
  };
}

export function AuthProvider({ children }) {
  // Initialize from localStorage immediately (synchronous)
  const [authState, setAuthState] = useState(() => initializeAuthState());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Verify token validity on mount (async verification only)
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        
        // If no token, we're done
        if (!token) {
          setIsLoading(false);
          return;
        }

        // Verify token is still valid
        try {
          const response = await getCurrentUser();
          // Token is valid, update with fresh user data
          setAuthState({
            accessToken: token,
            user: response.data,
          });
          localStorage.setItem('user', JSON.stringify(response.data));
        } catch (err) {
          // Token expired or invalid, clear everything
          localStorage.removeItem('accessToken');
          localStorage.removeItem('user');
          setAuthState({
            accessToken: null,
            user: null,
          });
        }
      } catch (err) {
        console.error('Auth verification error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, []);

  const login = (token, userData) => {
    setAuthState({
      accessToken: token,
      user: userData,
    });
    localStorage.setItem('accessToken', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setError(null);
  };

  const logout = () => {
    setAuthState({
      accessToken: null,
      user: null,
    });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        accessToken: authState.accessToken,
        isLoading,
        error,
        login,
        logout,
        isAuthenticated: !!authState.accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}