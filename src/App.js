import React from "react";
import "./App.css";
import List from "./List";

class App extends React.Component {
  state = {
    tasks: ["Make notes"],
    currInput: "",
  };

  deleteTask = (singleTask) => {
    let currTaskArr = this.state.tasks;

    let filteredTaskArr = currTaskArr.filter((element) => {
      return element != singleTask;
    });

    this.setState({
      tasks: filteredTaskArr,
    });
  };

  render = () => {
    return (
      <div>
        <input
          className="input-box"
          type="text"
          onChange={(e) => {
            this.setState({
              currInput: e.currentTarget.value,
            });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              this.setState({
                tasks: [...this.state.tasks, this.state.currInput],
                currInput: "",
              });
            }
          }}
          value={this.state.currInput}
        />

        <List tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  };
}

export default App;
