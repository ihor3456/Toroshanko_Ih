import React from "react";
import CardItem from "./CardItem";
import Modal from './../Modal'
import Button from "../Button";
import PropTypes from 'prop-types';
import './CardList.scss';

export default class CardList extends React.Component{
    state = {
        isModalOpen: false,
        cardId: null,
    }

    addToFavorite(id){
        const itemInLocalStorage = JSON.parse(localStorage.getItem("favorite"))
        if (itemInLocalStorage){
            const index = itemInLocalStorage.indexOf(id)
            if(index === -1){
                localStorage.setItem("favorite", JSON.stringify([...itemInLocalStorage, id]))
            }else{
                itemInLocalStorage.splice(index, 1)
                if(localStorage.length === 0) {
                    localStorage.removeItem("favorite")
                }else{
                    localStorage.setItem("favorite", JSON.stringify(itemInLocalStorage))
                }
            }
        }else{
            localStorage.setItem("favorite", JSON.stringify([id]))
        }
    }

    addToBasket() {
        
        const local = JSON.parse(localStorage.getItem("basket"))
        if (local) {
            const index = local.indexOf(this.state.cardId)
            if (index === -1) {
                localStorage.setItem("basket", JSON.stringify([...local, this.state.cardId]))
            } else {
                local.splice(index, 1)
                if (local.length === 0) {
                    localStorage.removeItem("basket")
                } else {
                    localStorage.setItem("basket", JSON.stringify(local))
                }
            }
        } else {
            localStorage.setItem("basket", JSON.stringify([this.state.cardId]))
        }
    
    }
    
    componentDidUpdate(prevState) {
        const{updateItemCount} = this.props
        if (prevState.basketItems !== this.state.basketItems) {
          updateItemCount();
        }
      }
 
    addTo = () => {
        const{updateItemCount} = this.props
        updateItemCount();
        this.addToBasket()
        this.handleModal()
    }


    handleModal = (id) => {
        this.setState({cardId: id})
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    closeOutModal = e => {
        if (e.target.className === 'modal-wrapper') {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            })
        }
    }
    
    render() {

        const {isModalOpen} = this.state
        const {list} = this.props
        const listCard = list.map(el => {
            return(
                <CardItem
                name={el.name}
                price={el.price}
                path={el.path}
                color={el.color}
                article={el.article}
                key={el.article}
                addToFavorite={() =>  this.addToFavorite(el.article)}
                handleModal={() => this.handleModal(el.article)}
                updateFavorite={this.props.updateFavorite}
                favoriteItems={this.props.favoriteItems}
                />
            )
        })

        return(
            <>
            <div className="cards">
                {listCard}
            </div>
            {isModalOpen && <Modal onClick={this.handleModal} onClose={this.closeOutModal}
            text={'Confirmation of adding the product to the cart'}
            cardBtn={<Button text='Confirm' 
            onClick={() =>this.addTo()}/>}
            />}
            </>
        )
    }
    
}
CardList.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        article: PropTypes.string,
        color: PropTypes.string,
        path: PropTypes.string,
        price: PropTypes.string,
        isAdded: PropTypes.bool,
        isFavorite: PropTypes.bool
      })
    ),
  };