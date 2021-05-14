class SignUp extends React.Component {
  render() {
    return (
      <div>
        <details className="signup-modal">
          <summary className="signup-title"> TOGGLE SIGN UP </summary>
          <form action="/users" method="POST">
            <div className="signup-div">
              <input
                placeholder="USERNAME (2-16 Chars)"
                className="signup-inputs"
                type="text"
                name="username"
                required
                pattern="[A-Za-z\s]{2,16}"
              />
              <input
                className="signup-inputs"
                type="password"
                name="password"
                placeholder="PASSWORD (5-16 Chars)"
                required
                pattern="[A-Za-z0-9\W+]{5,16}"
              />
              <input className="signup-submit" type="submit" value="SIGN UP" />
            </div>
          </form>
        </details>
      </div>
    );
  }
}
