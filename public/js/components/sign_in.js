class SignIn extends React.Component {
  render() {
    return (
      <div>
        <h2 className="signin-title"> SIGN IN </h2>
        <form onSubmit={this.props.signIn}>
          <div className="signin-container">
            {this.props.currentUser === "password does not match" ? (
              <h4 className="wrong-pass"> Password does not match username </h4>
            ) : this.props.currentUser === "no user found" ? (
              <h4 className="wrong-user">No user with that username found</h4>
            ) : null}
            <input
              placeholder="USERNAME"
              className="signin-inputs"
              type="text"
              name="username"
              required
              onChange={this.props.handleChange}
              id="username"
            />
            <label htmlFor="password"></label>
            <input
              className="signin-inputs"
              type="password"
              name="password"
              placeholder="PASSWORD"
              required
              onChange={this.props.handleChange}
              id="password"
            />
            <input className="signin-button" type="submit" value="LOG IN" />
          </div>
        </form>
      </div>
    );
  }
}
