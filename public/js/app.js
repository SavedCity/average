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
    currentUser: {},
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

  updateStateForSubmit = (event) => {
    console.log(
      event.target.parentElement.previousSibling.previousSibling.previousSibling
        .firstChild.firstChild.firstChild.wholeText
    );
    this.setState({
      author: (this.state.author =
        event.target.parentElement.previousSibling.previousSibling.previousSibling.firstChild.firstChild.firstChild.wholeText),
      title: (this.state.title =
        event.target.parentElement.previousSibling.previousSibling.previousSibling.firstChild.firstChild.nextSibling.firstChild.wholeText),
      image: (this.state.image =
        event.target.parentElement.previousSibling.previousSibling.previousSibling.firstChild.nextSibling.firstChild.src),
      content: (this.state.content =
        event.target.parentElement.previousSibling.previousSibling.previousSibling.firstChild.firstChild.nextSibling.nextSibling.firstChild.wholeText),
    });
  };

  deleteArticle = (event) => {
    axios.delete("/articles/" + event.target.value).then((response) => {
      this.setState({
        articles: response.data,
      });
    });
  };

  signIn = (event) => {
    event.preventDefault();
    axios.post("/sessions", this.state).then((response) => {
      this.setState({
        currentUser: response.data,
      });
    });
    // console.log(this.state.currentUser);
  };
  signUp = (event) => {
    event.preventDefault();
    axios.post("/users", this.state).then((response) => {
      this.setState({
        currentUser: response.data,
      });
    });
    // console.log(this.state.currentUser);
  };
  signOut = (event) => {
    // event.preventDefault();
  };

  addComment = (event) => {
    event.preventDefault();
    // event.currentTarget.reset();
    const id = event.target.articleId;
    axios.get("/posts/" + id, this.state).then((response) => {
      // console.log(response);
      this.setState({
        comments: response.data,
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

  // navScroll = () => {
  //   let nav = document.getElementsByClassName("nav");
  //   window.onscroll = () => {
  //     if (window.scrollY > 300) {
  //       nav.addClass("scrolled");
  //     } else {
  //       nav.removeClass("scrolled");
  //     }
  //   };
  // };

  render = () => {
    return (
      <div className="react-div-not-to-be-used">
        <div className="nav">
          {this.state.currentUser !== {} &&
          this.state.currentUser.gender === "Female" ? (
            <div className="profile-div">
              <h1 className="username">{this.state.currentUser.username}</h1>
              <img
                className="profile-picF"
                src="https://icon-library.com/images/woman_1249851.png"
                alt="female-photo"
              />
            </div>
          ) : this.state.currentUser !== {} &&
            this.state.currentUser.gender === "Male" ? (
            <div className="profile-div">
              <h1 className="username">{this.state.currentUser.username}</h1>
              <img
                className="profile-picM"
                src="https://lh3.googleusercontent.com/proxy/bx_GbSIfKImwl8bgbYWevgPiUnekhfyZ4KN4AO1hLZ2kSPQVWODl0OkZQLy7Bhlv2J0tCFcgan3QqF6kg3fTqPpQxj7ljJ_0F0WW1gBEvPk"
                alt="male-photo"
              />
            </div>
          ) : null}

          <div>
            <h2 className="top-logo">
              <img
                className="top-logo-pic"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/OOjs_UI_icon_article-rtl-progressive.svg/1200px-OOjs_UI_icon_article-rtl-progressive.svg.png"
              />
              Average
            </h2>
          </div>
          <div className="right-nav-div">
            <CreateArticle
              currentUser={this.state.currentUser}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            ></CreateArticle>
          </div>
        </div>

        <div className="main-container">
          {this.state.currentUser.username ? (
            <form onClick={this.signOut}>
              <button className="sign-out" type="submit">
                <i className="fas fa-sign-out-alt"></i>
              </button>
            </form>
          ) : (
            <div className="sign-modal">
              <SignIn
                currentUser={this.state.currentUser}
                handleChange={this.handleChange}
                signIn={this.signIn}
                signUp={this.signUp}
              ></SignIn>
            </div>
          )}

          {this.state.articles.map((article) => {
            return (
              <div key={article._id} className="content-container">
                <Articles article={article}></Articles>

                <LikeButton
                  article={article}
                  updateLike={this.updateLike}
                ></LikeButton>

                <Comments
                  articleid={article._id}
                  handleChange={this.handleChange}
                  addComment={this.addComment}
                ></Comments>

                <EditArticle
                  updateStateForSubmit={this.updateStateForSubmit}
                  deleteArticle={this.deleteArticle}
                  updateArticle={this.updateArticle}
                  handleChange={this.handleChange}
                  article={article}
                  author={this.state.author}
                  title={this.state.title}
                  image={this.state.image}
                  content={this.state.content}
                  length={this.state.length}
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
