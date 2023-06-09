import React, { Component } from "react";
import CardList from "./components/CardList/CardList";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Card
          id={1}
          name={"Джинси Моми"}
          price={800}
          image={"https://images.prom.ua/4369719038_w640_h640_dzhinsi-momi.jpg"}
          article={916805}
          color={"Blue"}
        /> */}
        <CardList />

        {/* <div className="btn-container">
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
        </div> */}
      </div>
    );
  }
}

export default App;
