import { useState } from 'react';
import validator from 'validator';
import './App.css';

function App() {
  // get the value of our inputs inside state
  const [signupInput, setSignupInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  // set error state
  const [error, setError] = useState('');

  // handle the input change
  const handleChange = (e) => {
    // update the state
    setSignupInput({
      ...signupInput, // spread out the signupInput state
      [e.target.name]: e.target.value, // this resolves to whatever the name of the input it's being called in
    });
  };

  // handle submit button click
  const handleClick = (e) => {
    e.preventDefault();
    // get the email and validate that its an actual email
    if (!validator.isEmail(signupInput.email)) {
      return setError('The email you input is invalid.');
    } else if (signupInput.password.length < 5) {
      return setError('The password you entered should contain 5 or more characters.');
    }
    setSignupInput({ email: '', password: '', confirmPassword: '' });
    setError('');
  };

  return (
    <div className="App">
      <form>
        <div className="input-container">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={signupInput.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={signupInput.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="form-control"
            value={signupInput.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
