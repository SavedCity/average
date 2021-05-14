class CreateArticle extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            required
            placeholder="Author"
            type="text"
            id="author"
            onChange={this.props.handleChange}
          />
          <br />

          <input
            required
            placeholder="TITLE (35-70 CHARS)"
            type="text"
            id="title"
            onChange={this.props.handleChange}
            pattern="[A-Za-z0-9\s\W+]{35,70}"
          />
          <br />

          <input
            placeholder="Image"
            type="text"
            id="image"
            onChange={this.props.handleChange}
          />
          <br />

          <textarea
            required
            placeholder="ARTICLE CONTENT"
            type="text"
            id="content"
            onChange={this.props.handleChange}
            pattern="[A-Za-z0-9\s\W+]{35,70}"
          ></textarea>
          <br />

          <label htmlFor="length">Read Length </label>
          <input
            required
            placeholder="4"
            type="number"
            id="length"
            onChange={this.props.handleChange}
            min="1"
            max="60"
          />
          <br />

          <input type="submit" value="POST ARTICLE" />
        </form>
      </div>
    );
  }
}
