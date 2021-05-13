class Comments extends React.Component {
  render() {
    return (
                <div>
                    <form>
                      <input
                        placeholder="Leave a comment"
                        type="text"
                        id="comment"
                        >
                        </input>
                        <input
                        type="text"
                        id="name"
                        placeholder="enter your name"
                        />
                        <input
                          type="submit"
                          value="Add Comment"
                        />
                    </form>
                </div>
    )
  }
}
