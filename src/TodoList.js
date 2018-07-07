import React, { Component } from "react";
import TodoItems from "./TodoItems";
import TodoProgress from "./TodoProgress";

import "./TodoList.css";
import "./TodoProgress.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{
        text: "Example task",
        key: Date.now()
      }]
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this._maxValue = 10;
  }

  addItem(e) {
    if (this.state.items.length >= this._maxValue) {
      e.preventDefault();
      return;
    }

    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div id="reactLogo">
        </div>
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(x) => this._inputElement = x} placeholder="enter task" required>
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoProgress max={this._maxValue} value={this.state.items.length} />
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;