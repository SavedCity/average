class CreateArticle extends React.Component {
  open = () => {
    document.getElementById("post-modal").style.display = "block";
  };
  close = () => {
    document.getElementById("post-modal").style.display = "none";
  };
  warning = () => {
    document.getElementById("warning-text").innerHTML =
      "Must be signed in to post";
    setTimeout(function () {
      document.getElementById("warning-text").innerHTML = "";
    }, 2300);
  };

  render() {
    return (
      <div>
        <h3 id="warning-text"></h3>
        {this.props.currentUser.username ? (
          <button onClick={this.open} id="open-post-modal">
            <i className="fas fa-file-alt"></i> POST ARTICLE
          </button>
        ) : (
          <button onClick={this.warning} id="open-post-modal-before">
            <i className="fas fa-file-alt"></i> POST ARTICLE
          </button>
        )}

        <div id="post-modal">
          <form onSubmit={this.props.handleSubmit}>
            <div className="post-modal-content">
              <button onClick={this.close} className="close-post-modal">
                <i className="fas fa-times"></i>
              </button>
              <div className="content-div">
                <h1 className="post-title">POST AN ARTICLE</h1>
                <input
                  type="text"
                  id="author"
                  onChange={this.props.handleChange}
                  className="post-input"
                  placeholder={this.props.currentUser.username}
                />
                <br />
                <input
                  required
                  placeholder="TITLE (35-70 CHARS)"
                  type="text"
                  id="title"
                  onChange={this.props.handleChange}
                  pattern="[A-Za-z0-9\s\W+]{35,70}"
                  className="post-input"
                />
                <br />
                <input
                  placeholder="Image"
                  type="text"
                  id="image"
                  onChange={this.props.handleChange}
                  className="post-input"
                />
                <br />
                <textarea
                  required
                  placeholder="ARTICLE CONTENT"
                  type="text"
                  id="content"
                  onChange={this.props.handleChange}
                  pattern="[A-Za-z0-9\s\W+]{35,70}"
                  className="post-input-content"
                ></textarea>
                <br />

                <input
                  required
                  placeholder="READ LENGTH (IN MINS, MAX 60)"
                  type="number"
                  id="length"
                  onChange={this.props.handleChange}
                  min="1"
                  max="60"
                  className="post-input"
                />
                <br />
                <input
                  className="post-submit"
                  type="submit"
                  value="POST ARTICLE"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
