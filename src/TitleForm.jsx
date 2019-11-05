import React, { Component } from "react";

class TitleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", textglobalTitle: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ textglobalTitle: event.target.value });
  }

  handleClick() {
    this.setState({ title: "My form - " });
  }

  componentDidMount() {
    console.log("Rendered Form");
  }

  componentDidUpdate() {
    console.log("Title changed");
  }

  render() {
    return (
      <div>
        <label htmlFor="title">Form Title </label>
        <input
          id="title"
          type="text"
          value={this.state.textglobalTitle}
          onChange={this.handleChange}
        />
        <button
          id="btn"
          type="button"
          className="btn"
          onClick={this.handleClick}
        >
          Validate
        </button>
        <h1>
          {this.state.title}
          {this.state.textglobalTitle}
        </h1>
      </div>
    );
  }
}

export default TitleForm;
