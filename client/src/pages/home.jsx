import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const Homepage = () => {
  const navigate = useNavigate();
  const [cookie, setCookies, removeCookies] = useCookies(['access_token']);

  const logout = () => {
    window.localStorage.removeItem('UserId');
    removeCookies('access_token');
    navigate('/account/login');
  };

  const login = () => {
    removeCookies('access_token');
    navigate('/account/login');
  };

  return (
    <div>
      <h1>hello this the home page</h1>
      {cookie.access_token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};
