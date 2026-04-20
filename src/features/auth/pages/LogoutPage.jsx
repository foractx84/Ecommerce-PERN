import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../api/authApi';
import { useAuth } from '../../../contexts/AuthContext';

function LogoutPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Call backend logout to revoke refresh token
        await logoutUser();
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        // Clear frontend auth state (localStorage, context)
        logout();
        
        // Redirect to home
        navigate('/');
      }
    };

    handleLogout();
  }, [logout, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg">Logging out...</p>
    </div>
  );
}

export default LogoutPage;