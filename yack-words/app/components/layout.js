'use strict';
var React = require('react');

var Layout = React.createClass({
  render: function() {
    return (
      <div className="container">
        <header className="header">
          <section className="header-top">
            <div className="header-top-logo">
              <h1>YackWords</h1>
            </div>
            <nav className="header-top-navigation">
            </nav>
          </section>
          <nav className="header-navigation">
            <div className="header-navigation-title">
              A Yelp hackathon project &rarr;
            </div>
            <div className="header-navigation-links">
              <a href="#/">Home</a>
            </div>
          </nav>
        </header>
        <section className="content">
          {this.props.children}
        </section>
        <footer className="footer">
          Yack Words (By Team Untitled), MIT Licensed,
          [<a href="https://github.com/kiasaki/yackathon-untitled">GitHub</a>]
        </footer>
      </div>
    );
  }
});

module.exports = Layout;
