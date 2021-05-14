class EditArticle extends React.Component {
  render() {
    return (
      <details className="edit-details">
        <summary className="edit-summary"> TOGGLE MODIFY </summary>
        <form id={this.props.article._id} onSubmit={this.props.updateArticle}>
          <input
            className="edit-inputs"
            required
            placeholder="Author"
            type="text"
            id="author"
            onChange={(event) => {
              this.setState({ author: event.target.value });
            }}
          />
          <br />

          <input
            className="edit-inputs"
            required
            placeholder="Title"
            type="text"
            id="title"
            onChange={this.props.handleChange}
          />
          <br />

          <input
            className="edit-inputs"
            placeholder="Image"
            type="text"
            id="image"
            onChange={this.props.handleChange}
          />
          <br />

          <textarea
            className="edit-content"
            required
            placeholder="Article Content"
            type="text"
            id="content"
            onChange={this.props.handleChange}
          ></textarea>

          <input
            className="edit-inputs"
            required
            placeholder="MIN READ"
            type="number"
            id="length"
            onChange={this.props.handleChange}
            min="1"
            max="60"
          />
          <br />

          <input className="save-edit" type="submit" value="SAVE" />
        </form>
        <button
          className="delete-btn"
          onClick={this.props.deleteArticle}
          value={this.props.article._id}
        >
          REMOVE THIS ARTICLE
        </button>
      </details>
    );
  }
}
