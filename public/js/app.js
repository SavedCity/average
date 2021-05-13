class App extends React.Component {
  state = {
    author: "",
    title: "",
    image: "",
    content: "",
    length: undefined,
    createdAt: undefined,
    likes: 0,
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

  likeButton = (event) => {
    axios.put("/articles/" + event.target.id, this.state).then((response) => {
      this.setState({
        articles: response.data,
        likes: (this.state.likes += 1),
      });
    });
  };

  render = () => {
    return (
      <div className="react-div-not-to-be-used">
        <h1>Average</h1>
        <h4>where articles become average...</h4>

        <CreateArticle
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <div className="content-container">
          {this.state.articles.map((article) => {
            return (
              <div key={article._id} className="content">
                <h2> {article.author} </h2>
                <h2> {article.title} </h2>
                <img
                  src={
                    article.image === ""
                      ? "https://thumbs.dreamstime.com/b/article-linear-icon-modern-outline-logo-concept-whit-white-background-programming-collection-suitable-use-web-apps-133523925.jpg"
                      : article.image
                  }
                />
                <h2> {article.content} </h2>
                <h4> {article.createdAt} </h4>
                <h4>
                  {article.length === undefined
                    ? null
                    : article.length + " min read"}
                </h4>
                <div>
                  <form>
                    <input
                      placeholder="Leave a comment"
                      type="text"
                      id="comment"
                    ></input>
                    <input type="submit" value="Add Comment" />
                  </form>
                </div>

                <EditArticle
                  onChange={this.handleChange}
                  article={this.state.articles}
                />

                <br />

                <button onClick={this.deleteArticle} value={article._id}>
                  REMOVE THIS ARTICLE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector("main"));
