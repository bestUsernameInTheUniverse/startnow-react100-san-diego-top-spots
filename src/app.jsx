import React, { Component } from 'react';
var axios = require('axios');

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      topSpots: []
    };
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => this.setState({ topSpots: response.data }));
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='card mt-4 border-dark'>
            <div className='card-body'>
              <h4>San Diego Top Spots</h4>
              <p>A list of the top 30 places to see in San Diego, California.</p>
            </div>
          </div>

          <pre>{ JSON.stringify(this.state.topSpots, null, 2) }</pre>

        </div>
      </div>
    );
  }
}

export default App;
