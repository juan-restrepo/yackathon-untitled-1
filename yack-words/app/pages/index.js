'use strict';
var React  = require('react');

var Geo    = require('../lib/geo');
var Layout = require('../components/layout');

var IndexPage = React.createClass({
  getInitialState: function() {
    return {results: null, activeSearch: false};
  },

  componentDidMount: function() {
    this.refs.search.getDOMNode().focus();
  },

  handleSearchKey: function(e) {
    var k = e.keyCode;
    if (k < 48 || (k > 57 && k < 65) || k > 90) return;

    this.setState({activeSearch: false});

    if (this.skHandle) clearTimeout(this.skHandle);
    this.skHandle = setTimeout(function() {
      this.startLocationSearch();
    }.bind(this), 300);
  },

  startLocationSearch: function() {
    Geo.codeAddress(this.refs.search.getDOMNode().value, function(err, loc) {
      if (err) {
        console.log(err);
      } else {
        this.setState({activeSearch: true}, function() {
          Geo.initialize(this.refs.previewMap.getDOMNode());
          Geo.centerAndAddMarker(loc);
          this.startWordSearch();
        });
      }
    }.bind(this));
  },

  startWordSearch: function() {
  
  },

  render: function() {
    var results;

    if (this.state.results === null) {
      results = <p className="centered-message">
        No results came in yet, go, you can do it, make a search :)
      </p>;
    } else if (this.state.results.length === 0) {
      results = <p className="centered-message">
        Fetching all kinds of nice words (and few bad ones) ...
      </p>;
    } else {
      results = null;
    }

    return (
      <Layout>
        <div className="flex">
          <section className="search-box">
            <input type="text" ref="search" placeholder="i.e. Montréal, Québec"
            onKeyUp={this.handleSearchKey} />
            <div className="preview-box">
              {this.state.activeSearch ? (
                <div className="google-map" ref="previewMap"></div>
              ) : (
                <p>Start by searching for a location!</p>
              )}
            </div>
          </section>

          <p className="search-help">
            <strong>YackWords</strong> is a cool and fun little app that lets you
            search for a location/city and gives you back a compilation of all the words
            used in reviews of businesses in a 5km sphere around that location.
            <br/>
            <br/>
            Those words will be sorted by descending order based on the occurences
            count. Under those you will be proposed the top 5 businesses that had that
            had the most occurences of that very word in their reviews.
          </p>
        </div>

        {results}
      </Layout>
    );
  }
});

module.exports = IndexPage;
