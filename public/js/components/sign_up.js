class SignUp extends React.Component {
  render() {
    return (
      <div>
        <form action="/users" method="POST">
          <label htmlFor="name"></label>
          <input
            placeholder="USERNAME *"
            className="items"
            type="text"
            name="username"
            required
            pattern="[A-Za-z\s]{2,16}"
          />

          <label htmlFor="password"></label>
          <input
            className="items"
            type="password"
            name="password"
            placeholder="PASSWORD *"
            required
            pattern="[A-Za-z0-9\W+]{5,16}"
          />

          <input className="submit" type="submit" value="SIGN UP" />
        </form>
      </div>
    );
  }
}
