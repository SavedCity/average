class Comments extends React.Component {
  render() {
    return (
      <div className="comment-container">
        <form articleid={this.props.articleid}>
          <div className="comment-div">
            <textarea
              className="comment-input"
              placeholder="Leave a comment"
              type="text"
              id="comment"
              required
              onChange={this.props.handleChange}
            ></textarea>
            <button
              type='submit'
              className="comment-submit"
              onSubmit={this.props.addComment}
            >Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
