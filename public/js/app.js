class App extends React.Component {
  state = {
    author: "",
    title: "",
    image: "",
    content: "",
    length: undefined,
    createdAt: undefined,
    likes: undefined,
    articles: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/articles", this.state).then((response) => {
      this.setState({
        articles: response.data,
        author: "",
        title: "",
        image: "",
        content: "",
        length: undefined,
      });
    });
  };

  updateArticle = (event) => {
    event.preventDefault();
    axios.put("/articles/" + event.target.id, this.state).then((response) => {
      this.setState({
        articles: response.data,
        author: "",
        title: "",
        image: "",
        content: "",
        length: undefined,
      });
    });
  };

  deleteArticle = (event) => {
    axios.delete("/articles/" + event.target.value).then((response) => {
      this.setState({
        articles: response.data,
      });
    });
  };

  componentDidMount = () => {
    axios.get("/articles").then((response) => {
      this.setState({
        articles: response.data,
      });
    });
  };

  render = () => {
    return (
      <div className="react-div-not-to-be-used">
        <div className="nav">
          <img
            className="top-logo-pic"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/OOjs_UI_icon_article-rtl-progressive.svg/1200px-OOjs_UI_icon_article-rtl-progressive.svg.png"
          />
          <h2 className="top-logo">Average</h2>
          <div className="loggin">
            <details className="sign-modal">
              <summary className="modal-button">TOGGLE SIGN IN/SIGN UP</summary>
              <SignUp></SignUp>
              <SignIn></SignIn>
            </details>
          </div>
        </div>
        <h1> Post an article </h1>
        <CreateArticle
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></CreateArticle>
        <div className="main-container">
          {this.state.articles.map((article) => {
            return (
              <div key={article._id} className="content-container">
                <Articles article={article}></Articles>

                <LikeButton
                  article={article}
                  updateLike={this.updateLike}
                ></LikeButton>

                <Comments></Comments>

                <EditArticle
                  updateArticle={this.updateArticle}
                  handleChange={this.handleChange}
                  article={article}
                ></EditArticle>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector("main"));
