import React from "react";

class Spinner extends React.Component {
  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{this.props.message}</div>
      </div>
    );
  }
}
// default props if prop value is passed
Spinner.defaultProps = {
  message: "Loading",
};
export default Spinner;
