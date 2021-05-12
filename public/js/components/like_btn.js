class LikeButton extends React.Component {
  state = {
    likes: 0,
  };

  likeArticle = (event) => {
    this.setState({
      like: (this.state.likes += 1),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.likeArticle}>LIKE</button>
        <p> {this.state.likes} </p>
      </div>
    );
  }
}
