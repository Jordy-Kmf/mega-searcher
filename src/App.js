import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      farmManagers: [],
      searchParameter: ''
    };
  }

  // componentDidMount get executed after a component mounts or is done loading
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ farmManagers: users }));
  }

  // whenever setState is called and a prop changes, render() gets fired
  render() {
    const { farmManagers, searchParameter } = this.state;
    const filterededFarmMangers = farmManagers.filter(manager => manager.name.toLowerCase().includes(searchParameter.toLowerCase()))

    return (
      <div className="App">
        <input type='search' placeholder='Search farmer'
          onChange={e => this.setState({ searchParameter: e.target.value },
          )}
        />

        {/* pass the array, filterededFarmMangers, into props, manager */}
        <CardList manager={filterededFarmMangers} />
      </div>
    );
  }
}

export default App;
