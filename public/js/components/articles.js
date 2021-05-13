class Articles extends React.Component {
  render() {
    return (
      <div>
                <h2> {this.props.article.author} </h2>
                <h2> {this.props.article.title} </h2>
                <img
                  src={
                    this.props.article.image === ""
                      ? "https://thumbs.dreamstime.com/b/article-linear-icon-modern-outline-logo-concept-whit-white-background-programming-collection-suitable-use-web-apps-133523925.jpg"
                      : this.props.article.image
                  }
                />
                <h2> {this.props.article.content} </h2>
                <h4> {this.props.article.createdAt} </h4>
                <h4>
                  {this.props.article.length === undefined
                    ? null
                    : this.props.article.length + " min read"}
                </h4>
      </div>
    )
  }
}
