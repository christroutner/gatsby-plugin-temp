import React from "react";

let _this;

class POToggle extends React.Component {
  constructor(props) {
    super(props);

    _this = this;

    this.state = {
      address: "",
      amountSat: "",
      errMsg: "",
      txId: "",
      showScan: false,
      inFetch: false,
      postageRate: false,
      postOffice: false,
      postOfficeUrl: false,
      merchantData: false,
      postOfficeMsg: ""
    };
  }

  render() {
    return (
      <div style={{ marginBottom: "10px" }}>
        <p>
          Post Office{" "}
          <strong>{_this.state.postOffice ? "Enabled" : "Disabled"}</strong>
        </p>
        <label
          className="switch-address"
          style={{ margin: "0 auto", display: "block" }}
          htmlFor="address-checkbox"
        >
          <input
            id="address-checkbox"
            type="checkbox"
            onChange={() =>
              _this.setState({
                postOffice: !_this.state.postOffice
              })
            }
          />
          <span className="slider round" />
        </label>
      </div>
    );
  }
}

export default POToggle;
