import React from "react";
import "./temperature.scss";
import PageWrapper from "./components/PageWrapper";
import Header from "./components/Header";
import Temperature from "./components/Temperature";
import Controllers from "./components/Controllers";
import Modal from "./components/Modal";
import Weather from "./components/Weather";

export default class App extends React.Component {
  state = { temperature: 20, isModal: false };

  handleModal = () => {
    this.setState({ isModal: !this.state.isModal });
  };

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
    const { temperature, isModal } = this.state;

    return (
      <React.Fragment>
        <PageWrapper temperature={temperature}>
          <Header />
          <Temperature temperature={temperature} />
          <Controllers
            decrease={this.decrease}
            increase={this.increase}
            openModal={this.handleModal}
          />
          <Weather />
        </PageWrapper>
        {isModal && (
          <Modal temperature={temperature} closeModal={this.handleModal} />
        )}
      </React.Fragment>
    );
  }
}
