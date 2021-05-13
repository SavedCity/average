class App extends React.Component {
  state = {
    author: "",
    title: "",
    image: "",
    content: "",
    length: undefined,
    createdAt: undefined,
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

  dateTime = () => {
    new Date();
  };

  render = () => {
    return (
      <div className="react-div-not-to-be-used">
        <h2>Average</h2>
        <h4>where articles become average...</h4>

        <h1> Post an article </h1>
        <CreateArticle
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></CreateArticle>

        <div className="content-container">
          {this.state.articles.map((article) => {
            return (
              <div key={article._id} className="content">

                <Articles
                  article={article}
                ></Articles>

                <Comments></Comments>

                <EditArticle
                  handleChange={this.handleChange}
                  updateArticle={this.updateArticle}
                  article={article}

                ></EditArticle>

                <Delete
                  deleteArticle={this.deleteArticle}
                  article={article}
                ></Delete>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector("main"));
