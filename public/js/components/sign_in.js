class SignIn extends React.Component {
  render() {
    return (
      <div>
        <h2 className="signin-title"> SIGN IN </h2>
        <form action="/sessions" method="POST">
          <div className="signin-container">
            <label htmlFor="username"></label>
            <input
              placeholder="USERNAME"
              className="signin-inputs"
              type="text"
              name="username"
              required
            />

            <label htmlFor="password"></label>
            <input
              className="signin-inputs"
              type="password"
              name="password"
              placeholder="PASSWORD"
              required
            />

            <input className="signin-button" type="submit" value="LOG IN" />
          </div>
        </form>
      </div>
    );
  }
}
