class Articles extends React.Component {
  open = (event) => {
    document.getElementById("test").style.display = "block";
  };
  close = () => {
    document.getElementById("read-modal").style.display = "none";
  };
  render() {
    return (
      <div className="article-div">
        <div className="info-div">
          <h2 className="author">{this.props.article.author} </h2>
          <h2 className="title"> {this.props.article.title} </h2>

          <button onClick={this.open} id="read-button">
            <i className="fab fa-readme"></i>
          </button>

          <details id="open-read">
            <summary id="read-button-details">
              <div className="read-button-div">
                <i className="fab fa-readme"></i>
              </div>
            </summary>
            <h2 className="author-in">By {this.props.article.author} </h2>
            <h2 className="title-in"> {this.props.article.title} </h2>
            <h2 className="content"> {this.props.article.content} </h2>
          </details>

          <h4 className="read-length">
            {this.props.article.length === undefined
              ? null
              : this.props.article.length + " min read"}
          </h4>
        </div>

        <div className="img-div">
          <img
            className="img"
            src={
              this.props.article.image === ""
                ? "https://itergy.com/wp-content/uploads/2019/07/document-logo.png"
                : this.props.article.image
            }
          />
        </div>
      </div>
    );
  }
}
