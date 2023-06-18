import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [cookie, setCookies] = useCookies(['passreset_token']);

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        'https://localhost:3001/account/forgotpassword',
        { email }
      );
      setCookies('passreset_token', res.data.token);
      navigate(`/account/resetpassword/${res.data.token}`);
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
            <p class="paragraph small">
              Enter your email and we will send you a password reset link.
            </p>
          </div>
          <input
            type="email"
            placeholder="Email"
            maxlength="256"
            name="Email"
            id="wf-sign-up-email"
            class="text-field w-input"
            required=""
            data-wf-user-form-input-type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="submit"
            value="Send Reset Email"
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
