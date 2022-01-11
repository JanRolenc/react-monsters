import React, { Component } from 'react'
import './App.css';
import SearchBox from "./SearchBox";
import CardList from "./CardList";

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  onSearchFieldChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="center">
        <div className="center divName">
          <h1 className="title">Monsters</h1>
          <SearchBox
            placeholder='search monsters'
            searchfieldChange={this.onSearchFieldChange}
          />
        </div>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
