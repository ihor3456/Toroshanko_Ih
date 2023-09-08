import React, { useState, useEffect } from "react";
import CardItem from "../../components/CardList/CardItem";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import PropTypes from "prop-types";
import "./Basket.scss";

export default function Basket({collections, updateItemCount}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardId, setCardId] = useState(null);
  useEffect(() => {
    if (updateItemCount) {
      updateItemCount();
    }
  }, [cardId, updateItemCount]);

  const handleModal = (id) => {
    setCardId(id);
    setIsModalOpen(!isModalOpen);
  };

  const closeOutModal = (e) => {
    if (e.target.className === "modal-wrapper") {
      setIsModalOpen(!isModalOpen);
    }
  };

  const removeFromBasket = () => {
    const local = JSON.parse(localStorage.getItem("basket")) || [];
    const updatedLocal = [...local];
    const index = updatedLocal.indexOf(cardId);

    if (index !== -1) {
      updatedLocal.splice(index, 1);

      if (updatedLocal.length === 0) {
        localStorage.removeItem("basket");
      } else {
        localStorage.setItem("basket", JSON.stringify(updatedLocal));
      }
    }
  };

  const del = () => {
    removeFromBasket();
    handleModal();
  };

  const inBasket = JSON.parse(localStorage.getItem("basket")) || [];
console.log(Array.from(collections));
  const filterBasketCollections = collections.filter((product) => {
    let savedBasket = inBasket.find((bas) => bas === product.article);
    return savedBasket;
  });

  const listCard = filterBasketCollections.map((el) => (
    <CardItem
    name={el.name}
    price={el.price}
    path={el.path}
    color={el.color}
    article={el.article}
    text="Видалити з кошика"
    handleModal={() => handleModal(el.article)}
    renderButton={true}
  />
  ));

  return (
    <>
      <div className="cards">
        {listCard.length > 0 ? (
          listCard
        ) : (
          <p className="no-items">
            Товарів в корзині немає!
            <br />
            <a href="/">Головна</a>
          </p>
        )}
      </div>
      {isModalOpen && (
        <Modal
          onClick={handleModal}
          onClose={closeOutModal}
          text="Ви впевнені, що хочете видалити з кошика"
          cardBtn={<Button text="Видалити" onClick={del} />}
        />
      )}
    </>
  );
}
Basket.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      article: PropTypes.string,
      color: PropTypes.string,
      path: PropTypes.string,
      price: PropTypes.string,
    })
  ),
  updateItemCount: PropTypes.func,
};
