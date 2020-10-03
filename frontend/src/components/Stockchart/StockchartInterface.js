import React from "react";
import Stockchart from "./Stockchart";
import { getData } from "./StockchartUtils";

export default class ChartComponent extends React.Component {
  componentDidMount() {
    getData().then((data) => {
      this.setState({ data });
    });
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return <Stockchart type="svg" data={this.state.data} />;
  }
}
