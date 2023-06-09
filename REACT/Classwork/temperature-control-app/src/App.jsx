import React from "react";
import "./temperature.scss";
import PageWrapper from "./components/PageWrapper";
import Header from "./components/Header";
import Temperature from "./components/Temperature";

export default class App extends React.Component {
  state = { temperature: 20 };

  increase = () => {
    if (this.state.temperature < 29) {
      this.setState({ temperature: this.state.temperature + 1 });
    }
  };
  decrease = () => {
    if (this.state.temperature > 0) {
      this.setState({ temperature: this.state.temperature - 1 });
    }
  };

  render() {
    const { temperature } = this.state;

    return (
      <PageWrapper temperature={temperature}>
        <Header />
        <Temperature temperature={temperature} />
        <div class="widget-controllers">
          <div class="button-container">
            <button class="button" type="button" onClick={this.decrease}>
              Cold
            </button>
            <button class="button" type="button" onClick={this.increase}>
              Hot
            </button>
          </div>
        </div>
      </PageWrapper>
    );
  }
}
