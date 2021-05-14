class SignIn extends React.Component {
  render() {
    return (
      <div>
        <form action="/sessions" method="POST">
          <div className="container">
            <label htmlFor="username"></label>
            <input
              placeholder="USERNAME"
              className="fields"
              type="text"
              name="username"
              required
            />

            <label htmlFor="password"></label>
            <input
              className="fields"
              type="password"
              name="password"
              placeholder="PASSWORD"
              required
            />

            <input className="submit" type="submit" value="LOG IN" />
          </div>
        </form>
      </div>
    );
  }
}
