import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-brand">
          <div className="brand-icon">⚓</div>

          <span>
            Shipyard <strong>AI</strong>
          </span>
        </div>

        <div className="auth-heading">
          <h1>Create your account 🚀</h1>

          <p>
            Start building with Shipyard AI today.
          </p>
        </div>

        <form>

          <div className="form-group">
            <label htmlFor="name">
              Full name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <label className="terms">
            <input type="checkbox" />
          </label>

          <button
            type="submit"
            className="primary-button"
          >
            Create Account →
          </button>

        </form>

        <div className="divider">
          <span />
          <p>OR</p>
          <span />
        </div>

        <button className="google-button">
          <span className="google-icon">G</span>
          Continue with Google
        </button>

        <p className="switch-text">
          Already have an account?

          <Link to="/login">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;