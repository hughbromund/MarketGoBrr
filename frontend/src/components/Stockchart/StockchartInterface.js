import React from "react";
import Stockchart from "./Stockchart";
import { getData } from "./StockchartUtils";

export default class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: this.props.rawData,
    };
  }
  componentDidMount() {
    console.log(this.state.rawData);
    var mydata = getData(this.state.rawData);
    this.setState({ data: mydata });
  }
  render() {
    if (this.state.data == null) {
      return <div>Loading...</div>;
    }
    return <Stockchart type="svg" data={this.state.data} />;
  }
}
