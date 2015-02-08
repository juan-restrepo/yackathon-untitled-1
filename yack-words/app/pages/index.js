'use strict';
var React  = require('react');

var Layout = require('../components/layout');

var IndexPage = React.createClass({
  render: function() {
    return (
      <Layout>
        <h1 className="page-header">Home</h1>
      </Layout>
    );
  }
});

module.exports = IndexPage;
