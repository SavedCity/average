class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr />

        <div className="foot">
          <div className="social">
            <h3 className="name">Andy Checo</h3>
            <a
              className="foot-links"
              href="https://www.linkedin.com/in/andy-checo-645a77208/"
            >
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>

            <a className="foot-links" href="https://github.com/SavedCity">
              <i class="fab fa-github"></i>
              GitHub
            </a>
          </div>

          <div className="line"></div>

          <div className="tag">
            <h3 className="bottom-logo">Average</h3>
          </div>

          <div className="line"></div>

          <div className="social-right">
            <h3 className="name">Ahmed Osman</h3>
            <a
              className="foot-links"
              href="https://www.linkedin.com/in/aosman-/"
            >
              LinkedIn <i class="fab fa-linkedin"></i>
            </a>

            <a className="foot-links" href="https://github.com/a-osm">
              GitHub <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
