class CreateArticle extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
                    <input
                    placeholder="Author"
                    type="text"
                    id="author"
                    onChange={this.props.handleChange}
                    />
                    <br />

                    <input
                    placeholder="Title"
                    type="text"
                    id="title"
                    onChange={this.props.handleChange}
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
                    placeholder="Article content"
                    type="text"
                    id="content"
                    onChange={this.props.handleChange}
                    ></textarea>
                    <br />

                    <label htmlFor="length">Read Length </label>
                    <input
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
    )
  }
}
