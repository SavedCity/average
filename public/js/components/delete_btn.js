class Delete extends React.Component {
  render() {
        return (
        <div>
            <button onClick={this.props.deleteArticle} value={this.props.article._id}>
                REMOVE THIS ARTICLE
            </button>
        </div>
        )
    }
}
