class LikeButton extends React.Component {
  state = {
    likes: false,
  };

  likeArticle = (event) => {
    this.setState({
      like: !this.state.likes,
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
