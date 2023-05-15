import React, { Component } from "react";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./app.scss";

class App extends Component {
  state = {
    isFirstModalOpen: false,
    isSecondModalOpen: false,
  };

  openFirstModal() {
    this.setState({ isFirstModalOpen: true });
  }

  openSecondModal() {
    this.setState({ isSecondModalOpen: true });
  }

  closeModal(e) {
    this.setState({ isFirstModalOpen: false });
    this.setState({ isSecondModalOpen: false });
  }

  render() {
    const { isFirstModalOpen, isSecondModalOpen } = this.state;

    return (
      <div className="App">
        <div className="btn-container">
          <Button
            text="Open first modal"
            backgroundColor="#ff3fe8"
            onClick={() => this.openFirstModal()}
          />
          <Button
            text="Open second modal"
            backgroundColor=" #b351f1"
            onClick={() => this.openSecondModal()}
          />
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
