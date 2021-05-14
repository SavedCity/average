class SignIn extends React.Component {
  render() {
    return (
      <div>
        <h2 className="signin-title"> SIGN IN </h2>
        <form onSubmit={this.props.signIn}>
          <div className="signin-container">
            <label htmlFor="username"></label>
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
