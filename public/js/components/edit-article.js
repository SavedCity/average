class EditArticle extends React.Component {
  render() {
    return (
      <details>
        <summary> UPDATE </summary>
        <form id={article.props._id} onSubmit={this.props.updateArticle}>
          <input
            placeholder="Author"
            value={this.props.state.author}
            type="text"
            id="author"
            onChange={this.props.handleChange}
          />
          <br />

          <input
            placeholder="Title"
            value={this.props.state.title}
            type="text"
            id="title"
            onChange={this.props.handleChange}
          />
          <br />

          <input
            placeholder="Image"
            value={this.props.state.image}
            type="text"
            id="image"
            onChange={this.props.handleChange}
          />
          <br />

          <textarea
            placeholder="Article Content"
            value={this.props.state.content}
            type="text"
            id="content"
            onChange={this.props.handleChange}
          ></textarea>
          <br />

          <label htmlFor="length">Read Length </label>
          <input
            value={this.props.state.length}
            placeholder="4"
            type="number"
            id="length"
            onChange={this.props.handleChange}
            min="1"
            max="60"
          />
          <br />

          <input type="submit" value="SAVE" />
        </form>
      </details>
    );
  }
}
