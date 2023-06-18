import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [cookie, setCookies, removeCookies] = useCookies(['access_token']);
  const navigate = useNavigate();
  console.log(cookie);
  cookie.access_token ? navigate('/') : navigate('/account/login');

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('https://localhost:3001/account/login', {
        email,
        password,
      });
      alert(res.data.message);
      setCookies('access_token', res.data.token);
      !res.data.token ? navigate('/account/login') : navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  class Setstate
  {
    constructor (event)
    {
      
    PasswordState(event) {
      setPassword(event.target.value);
    }
    EmailState(event) {
      setPassword(event.target.value);
    }
  }
  }

  return (
    <div class="w-users-userformpagewrap full-page-wrapper">
      <div class="w-users-userloginformwrapper form-card">
        <form
          data-wf-user-form-type="login"
          data-wf-user-form-redirect="/home"
          method="post"
          onSubmit={onSubmit}
        >
          <div class="w-users-userformheader form-card-header">
            <h2 class="heading h4">Wecome back</h2>
            <div class="text-box _250px center-align">
              <p class="paragraph small">
                Fill in your log in details to keep reading hundreds of free
                articles.
              </p>
            </div>
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
            onChange={Setstate.EmailState}
          />

          <input
            type="password"
            maxlength="256"
            placeholder="Your password"
            name="Password"
            id="wf-log-in-password"
            class="text-field w-input"
            required=""
            data-wf-user-form-input-type="password"
            value={password}
            onChange={Setstate.PasswordState()}
          />

          <input
            type="submit"
            value="Log In"
            data-wait="Please wait..."
            class="w-users-userformbutton button w-button"
            onClick={onSubmit}
          />

          <div class="w-users-userformfooter form-card-footer">
            <span>Don&#x27;t have an account?</span>
            <Link to="/account/signup" class="grey-text-link">
              Sign Up
            </Link>
          </div>
        </form>
        <a href="/account/forgotpassword" class="below-card-link">
          Forgot your password?
        </a>
      </div>
    </div>
  );
};
