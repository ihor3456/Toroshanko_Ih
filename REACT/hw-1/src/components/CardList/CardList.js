import React from "react";
import sendRequest from "../../config/sendRequest";
import Card from "../Card/Сard";
import Modal from "../Modal/Modal";
import "./cardList.scss";
export default class CardList extends React.Component {
  state = {
    products: [],
    isModalOpen: false,
    id: null,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  fm = (id) => {
    this.setState({ id: id });
    this.openModal();
  };

  closeModal = (e) => {
    if (
      e.target.className === "modal-container" ||
      e.target.className === "modal__close-btn" ||
      e.target.className === "button"
    ) {
      this.setState({
        isModalOpen: false,
      });
    }
  };

  componentDidMount() {
    sendRequest("product.json").then((data) =>
      this.setState({ products: data })
    );
  }

  render() {
    const prod = this.state.products.map((el) => {
      return (
        <Card
          key={el.id}
          id={el.id}
          name={el.name}
          price={el.price}
          image={el.image}
          article={el.article}
          onClick={() => this.fm(el.id)}
        />
      );
    });
    return (
      <>
        <ul className="product-list">{prod}</ul>
        {this.state.isModalOpen && (
          <Modal
            background="#FF0000"
            header={"Add to basket"}
            closeButton={true}
            text={`Do you want to add this product to your basket?`}
            actions={
              <div>
                <button className="button">Ok</button>
                <button className="button">Cancel</button>
              </div>
            }
            onClick={(e) => this.closeModal(e)}
          />
        )}
      </>
    );
  }
}
