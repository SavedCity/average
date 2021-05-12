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

  render = () => {
    return (
      <div className="react-div-not-to-be-used">
        <h1>Average</h1>
        <h4>where average your article will become...</h4>

        <h1> Post an article </h1>

        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Author"
            type="text"
            id="author"
            onChange={this.handleChange}
          />
          <br />

          <input
            placeholder="Title"
            type="text"
            id="title"
            onChange={this.handleChange}
          />
          <br />

          <input
            placeholder="Image"
            type="text"
            id="image"
            onChange={this.handleChange}
          />
          <br />

          <textarea
            placeholder="Article content"
            type="text"
            id="content"
            onChange={this.handleChange}
          ></textarea>
          <br />

          <label htmlFor="length">Read Length </label>
          <input
            placeholder="4"
            type="number"
            id="length"
            onChange={this.handleChange}
            min="1"
            max="60"
          />
          <br />

          <input type="submit" value="POST ARTICLE" />
        </form>

        <div className="content-container">
          {this.state.articles.map((article) => {
            return (
              <div className="content">
                <h2> {article.author} </h2>
                <h2> {article.title} </h2>
                <img src={article.image} />
                <h2> {article.content} </h2>
                <h4> {article.createdAt} </h4>
                <h4> {article.length} min read</h4>
                <details>
                  <summary> UPDATE </summary>
                  <form id={article._id} onSubmit={this.updateArticle}>
                    <input
                      placeholder="Author"
                      value={this.state.author}
                      type="text"
                      id="author"
                      onChange={this.handleChange}
                    />
                    <br />

                    <input
                      placeholder="Title"
                      value={this.state.title}
                      type="text"
                      id="title"
                      onChange={this.handleChange}
                    />
                    <br />

                    <input
                      placeholder="Image"
                      value={this.state.image}
                      type="text"
                      id="image"
                      onChange={this.handleChange}
                    />
                    <br />

                    <textarea
                      placeholder="Article Content"
                      value={this.state.content}
                      type="text"
                      id="content"
                      onChange={this.handleChange}
                    ></textarea>
                    <br />

                    <label htmlFor="length">Read Length </label>
                    <input
                      value={this.state.length}
                      placeholder="4"
                      type="number"
                      id="length"
                      onChange={this.handleChange}
                      min="1"
                      max="60"
                    />
                    <br />

                    <input type="submit" value="SAVE" />
                  </form>
                </details>
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
