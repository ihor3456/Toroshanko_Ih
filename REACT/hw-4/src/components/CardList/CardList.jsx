import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from './CardItem';
import Modal from './../Modal'
import Button from "../Button";
import PropTypes from 'prop-types';
import './CardList.scss';
import { toggleModal } from '../../store/actions';

const CardList = ({ list, updateItemCount, updateFavorite, favoriteItems }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.isModalOpen);
  const [cardId, setCardId] = useState(null);

  useEffect(() => {
    if (updateItemCount) {
      updateItemCount();
    }
  }, [cardId, updateItemCount]);

  const addToBasket = () => {
    const local = JSON.parse(localStorage.getItem("basket")) || [];
    if (local) {
      const index = local.indexOf(cardId);
      if (index === -1) {
        localStorage.setItem("basket", JSON.stringify([...local, cardId]));
      } else {
        const updatedLocal = [...local];
        updatedLocal.splice(index, 1);
        if (updatedLocal.length === 0) {
          localStorage.removeItem("basket");
        } else {
          localStorage.setItem("basket", JSON.stringify(updatedLocal));
        }
      }
    } else {
      localStorage.setItem("basket", JSON.stringify([cardId]));
    }
  };

  const addTo = () => {
    updateItemCount();
    addToBasket();
    handleModal();
  };

  const handleModal = (id) => {
    setCardId(id);
    dispatch(toggleModal());
  };

  const closeOutModal = (e) => {
    if (e.target.className === 'modal-wrapper') {
      dispatch(toggleModal());
    }
  };

  const listCard = list.map((el) => (
    <CardItem
      name={el.name}
      price={el.price}
      path={el.path}
      color={el.color}
      article={el.article}
      id={el.article}
      handleModal={() => handleModal(el.article)}
      updateFavorite={updateFavorite}
      favoriteItems={favoriteItems}
      text='Додати до кошика'
      renderIcon={true}
      renderButton={true}
    />
  ));

  return (
    <>
      <div className="cards">{listCard}</div>
     
      {isModalOpen && (
        <Modal
          onClick={handleModal}
          onClose={closeOutModal}
          text="Додати товар в кошик?"
          cardBtn={<Button text="Додати" onClick={() => addTo()} />}
        />
      )}
    </>
  );
};

CardList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      article: PropTypes.number,
      color: PropTypes.string,
      path: PropTypes.string,
      price: PropTypes.number,
      isAdded: PropTypes.bool,
      isFavorite: PropTypes.bool
    })
  ),
};

export default CardList;