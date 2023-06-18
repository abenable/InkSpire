import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/home';
import { Login } from './pages/auth/login';
import { SignUp } from './pages/auth/signup';
import { ForgotPassword } from './pages/auth/forgotPassword';
import { ResetPassword } from './pages/auth/resetPassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/account/login" element={<Login />} />
        <Route exact path="/account/signup" element={<SignUp />} />
        <Route
          exact
          path="/account/forgotpassword"
          element={<ForgotPassword />}
        />
        <Route
          exact
          path="/account/resetpassword/:id"
          element={<ResetPassword />}
        />
      </Routes>
    </div>
  );
}

export default App;
