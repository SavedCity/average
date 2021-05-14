class Comments extends React.Component {
  render() {
    return (
      <div className="comment-container">
        <form>
          <div className="comment-div">
            <textarea
              className="comment-input"
              placeholder="Leave a comment"
              type="text"
              id="comment"
              required
            ></textarea>
            <input className="comment-submit" type="submit" value="COMMENT" />
          </div>
        </form>
      </div>
    );
  }
}
