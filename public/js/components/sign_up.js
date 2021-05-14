class SignUp extends React.Component {
  render() {
    return (
      <div>
        <form action="/users" method="POST">
          <div className="signup-div">
            <h2 className="signup-title"> SIGN UP </h2>
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
            <input className="submit" type="submit" value="SIGN UP" />
          </div>
        </form>
      </div>
    );
  }
}
