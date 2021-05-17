class SignIn extends React.Component {
  toggleClass = () => {
    document.querySelector(".menu").classList.toggle("toggle-open");
  };

  // closeSignIn = () => {
  //   document.getElementsByClassName("sign-in").innerHTML = "close";
  // };

  render() {
    return (
      <div>
        <div onClick={this.toggleClass} className="open-menu">
          <h1 className="sign-in">SIGN IN</h1>
        </div>
        <div className="menu">
          <h2 className="signin-title"> SIGN IN </h2>
          <form onSubmit={this.props.signIn}>
            <div className="signin-container">
              {this.props.currentUser === "password does not match" ? (
                <h4 className="wrong-pass">Password does not match username</h4>
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

          <details className="signup-modal">
            <summary className="signup-title"> TOGGLE SIGN UP </summary>
            <form action="/users" method="POST">
              <div className="signup-div">
                <select name="gender" className="signup-inputs" id="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input
                  placeholder="USERNAME (6-16 Chars)"
                  className="signup-inputs"
                  type="text"
                  name="username"
                  required
                  pattern="[A-Za-z\s]{6,16}"
                />
                <input
                  className="signup-inputs"
                  type="password"
                  name="password"
                  placeholder="PASSWORD (5-16 Chars)"
                  required
                  pattern="[A-Za-z0-9\W+]{5,16}"
                />

                <input
                  className="signup-submit"
                  type="submit"
                  value="SIGN UP"
                />
              </div>
            </form>
          </details>
        </div>
      </div>
    );
  }
}
