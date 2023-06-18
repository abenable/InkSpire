import axios from 'axios';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookie, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();
  console.log(cookie);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('https://localhost:3001/account/register', {
        username,
        email,
        password,
      });
      alert(res.data.message);
      setCookies('access_token', res.data.token);
      window.localStorage.setItem(
        'UserId',
        res.data.User._id
      )(!res.data.token ? navigate('/admin') : navigate('/'));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="w-users-userformpagewrap full-page-wrapper">
      <div class="w-users-usersignupformwrapper form-card">
        <form method="post" data-wf-user-form-type="signup" onSubmit={onSubmit}>
          <div class="w-users-userformheader form-card-header">
            <h2 class="heading h4">Sign up to start reading</h2>
            <div class="text-box _250px center-align">
              <p class="paragraph small">
                You&#x27;re one step away from accessing hundreds of free
                articles.
              </p>
            </div>
          </div>
          <input
            type="text"
            class="text-field w-input"
            autofocus="true"
            maxlength="256"
            name=""
            data-name="field"
            data-wf-user-field="wf-user-field-name"
            placeholder="Username"
            id="wf-sign-up-name"
            required=""
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />

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

          <label class="w-checkbox checkbox-field">
            <input
              type="checkbox"
              name="Agree-to-terms"
              id="Agree-to-terms"
              data-name="Agree to terms"
              required=""
              data-wf-user-field="wf-user-field-accept-privacy"
              class="w-checkbox-input check-box"
            />
            <span class="checkbox-label w-form-label" for="Agree-to-terms">
              I agree to this website&#x27;s{' '}
              <a
                href="privacy-policy.html"
                target="_blank"
                class="grey-text-link"
              >
                privacy policy
              </a>{' '}
              and{' '}
              <a
                href="terms-conditions.html"
                target="_blank"
                class="grey-text-link"
              >
                terms of service
              </a>
            </span>
          </label>
          <input
            type="submit"
            value="Sign Up"
            data-wait="Please wait..."
            class="w-users-userformbutton button w-button"
          />
          <div class="w-users-userformfooter form-card-footer">
            <span>Already have an account?</span>
            <Link to="/account/login" class="grey-text-link">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
