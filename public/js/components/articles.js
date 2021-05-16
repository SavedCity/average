class Articles extends React.Component {
  render() {
    return (
      <div className="article-div">
        <div className="info-div">
          <h2 className="author">{this.props.article.author} </h2>
          <h2 className="title"> {this.props.article.title} </h2>

          <h2 className="content"> {this.props.article.content} </h2>
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
        <div className="comments-div">
          {this.props.article.comments}
        </div>
      </div>
    );
  }
}
