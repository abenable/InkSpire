import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

export const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [cookie, setCookies, removeCookies] = useCookies(['access_token']);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.patch(
        `https://localhost:3001/account/resetpassword/${cookie.passreset_token}`,
        { password }
      );

      setCookies('access_token', res.data.token);
      removeCookies('passreset_token');
      window.localStorage.setItem(
        'UserId',
        res.data.UserId
      )(cookie.access_token ? navigate('/') : navigate('/account/login'));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="w-users-userformpagewrap full-page-wrapper">
      <div class="w-users-userresetpasswordformwrapper form-card">
        <form
          method="post"
          data-wf-user-form-type="resetPassword"
          onSubmit={onSubmit}
        >
          <div class="w-users-userformheader form-card-header">
            <h2 class="heading h4">Reset Password</h2>
            <p class="paragraph small">Enter your new password.</p>
          </div>
          <input
            type="password"
            placeholder="Password"
            maxlength="256"
            name="Password"
            id="wf-sign-up-password"
            class="text-field w-input"
            required=""
            data-wf-user-form-input-type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input
            type="submit"
            value="Change Password"
            data-wait="Please wait..."
            class="w-users-userformbutton button w-button"
          />
        </form>
      </div>
      <Link to="/account/login" class="below-card-link">
        Return to Login
      </Link>
    </div>
  );
};
