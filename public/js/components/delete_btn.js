class Delete extends React.Component {
  render() {
    return (
      <div className="delete-div">
        <button
          className="delete-btn"
          onClick={this.props.deleteArticle}
          value={this.props.article._id}
        >
          REMOVE THIS ARTICLE
        </button>
      </div>
    );
  }
}
