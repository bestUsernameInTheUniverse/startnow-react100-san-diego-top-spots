import React, { Component } from 'react';
import TopSpot from './topspot';
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
      <div className='App bg-primary'>
        <div className='container'>
          <div className='jumbotron bg-white border-dark'>
            <h1 className="display-4">San Diego Top Spots</h1>
            <p>A list of the top 30 places to see in San Diego, California.</p>
          </div>

          { 
            this.state.topSpots.map(ts => (
              <TopSpot
                key={ts.id}
                name={ts.name}
                description={ts.description}
                location={ts.location} />
            ))
          }

          {/* <div className="card">
            <div className="card-body">
              <pre>{ JSON.stringify(this.state.topSpots, null, 2) }</pre>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
