import React, { Component } from "react";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./app.scss";

class App extends Component {
  state = {
    isFirstModalOpen: false,
    isSecondModalOpen: false,
    isButton: true,
  };

  openFirstModal() {
    this.setState({ isFirstModalOpen: true, isButton: false });
  }

  openSecondModal() {
    this.setState({ isSecondModalOpen: true, isButton: false });
  }

  closeModal = (e) => {
    if (
      e.target.className === "modal-container" ||
      e.target.className === "modal__close-btn" ||
      e.target.className === "button"
    ) {
      this.setState({
        isFirstModalOpen: false,
        isSecondModalOpen: false,
        isButton: true,
      });
    }
  };

  render() {
    const { isFirstModalOpen, isSecondModalOpen, isButton } = this.state;

    return (
      <div className="App">
        <div className="btn-container">
          {isButton && (
            <Button
              text="Open first modal"
              backgroundColor="#fff345"
              onClick={() => this.openFirstModal()}
            />
          )}

          {isButton && (
            <Button
              text="Open second modal"
              backgroundColor=" #C71585"
              onClick={(e) => this.openSecondModal()}
            />
          )}
        </div>

        <div className="modal-container" onClick={(e) => this.closeModal(e)}>
          {isFirstModalOpen && (
            <Modal
              background="#FF0000"
              header={"Do you want to delete this file?"}
              closeButton={true}
              text={`Once you delete this file, it won't be possible to undo this action. 
						Are you sure you want to delete it?`}
              actions={
                <div>
                  <button className="button">Ok</button>
                  <button className="button">Cancel</button>
                </div>
              }
              onClick={(e) => this.closeModal(e)}
            />
          )}

          {isSecondModalOpen && (
            <Modal
              background="#b351f1"
              header={"Do you want to change this file?"}
              closeButton={true}
              text={`If you change this file, you will lost current version. If you create a new file, you will have both. Make you choice, please`}
              actions={
                <div>
                  <button className="button">Change</button>
                  <button className="button">Create a new file</button>
                  <button className="button">Cancel</button>
                </div>
              }
              onClick={(e) => this.closeModal(e)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
