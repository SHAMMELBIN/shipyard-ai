import { Link } from "react-router-dom";

function Login() {
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
          <h1>Welcome back 👋</h1>
          <p>Sign in to continue to Shipyard AI.</p>
        </div>

        <form>
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
            <div className="label-row">
              <label htmlFor="password">
                Password
              </label>

              <Link to="/forgot-password">
                Forgot password?
              </Link>
            </div>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <label className="remember">
            <input type="checkbox" />
            Remember me
          </label>

          <button
            type="submit"
            className="primary-button"
          >
            Sign In →
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
          Don't have an account?

          <Link to="/signup">
            Create account
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;