import React from "react";
import "./App.css";

class App extends React.Component {

  state = {
    tasks: ["Make notes"],
    currInput: "",
  }

  render = () => {

    return (
      <div>

        <input className="input-box" type="text"

          onChange={(e) => {
            this.setState({
              currInput: e.currentTarget.value
            })
          }}

          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              this.setState({
                tasks: [...this.state.tasks, this.state.currInput],
                currInput: "",
              });
            }
          }}

          value={this.state.currInput}
        />

        <ul>

          {
            this.state.tasks.map((el) => {
              return <li>{el} <button
                onClick={() => {

                  let currTaskArr = this.state.tasks;

                  let filteredTaskArr = currTaskArr.filter((element) => {
                    return element != el;
                  })

                  this.setState({ tasks: filteredTaskArr });

                }}>Delete</button></li>;
            })
          }

        </ul>
      </div>
    );
  }
}

export default App;

