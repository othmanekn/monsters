import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      serachField: "",
    };
  }

  onSearchChange = (events) => {
    this.setState({ serachField: events.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.serachField.toLowerCase())
    );
    return (
      <div className="tc">
        <div>
          <h1 className="f1">RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((Response) => Response.json())
      .then((users) => this.setState({ robots: users }));
  }
}

export default App;
