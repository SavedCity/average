class Comments extends React.Component {
  render() {
    return (
      <div>
          <form>
            <textarea
              placeholder="Leave a comment"
              type="text"
              id="comment"
              >
              </textarea>
              <input
                type="submit"
                value="Add Comment"
              />
          </form>
      </div>
    )
  }
}
