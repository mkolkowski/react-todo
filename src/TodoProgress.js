import React, { Component } from "react";

class TodoProgress extends Component {

    render() {
        return (
            <div>
                <div id="todoHeader">
                    <span>Tasks: {this.props.value} / {this.props.max}</span>
                </div>
                <progress id="todoProgress" value={this.props.value} max={this.props.max}></progress>
            </div>
        );
    }
};

export default TodoProgress;