import React from "react";
import Button from "../Button";
import Icon from "../Icon/Icon"
import PropTypes from 'prop-types';

export default class CardItem extends React.Component{
state = {
color: "gray",
}

componentDidMount(){
    const {article} =this.props
    const getFavoriteLocalStorage = JSON.parse(localStorage.getItem("favorite"))

    if(getFavoriteLocalStorage){
        getFavoriteLocalStorage.forEach(id=>{
            if(+id === +article) this.setState({color: "red"})
        })
    }
}

componentDidUpdate(prevState) {
    const{updateFavorite} = this.props
    if (prevState.favoriteItems !== this.state.favoriteItems) {
        updateFavorite();
    }
  }
  
changeColor = () =>{
    const {addToFavorite, updateFavorite} = this.props
   if(this.state.color === "gray"){
        this.setState({color: "green"})
   }else{
    this.setState({color: "gray"})

   }
   updateFavorite()
   addToFavorite()
}

render(){
    const {name, price, path, color, article, handleModal} = this.props
    return(
        <ul className="card-box">
            <li>{name}</li>
            <li className="card-item"><img src={path} alt="img" /></li>
            <li>price: {price} UAH</li>
            <li>product code: {article}</li>
            <li>color: {color}</li>
            <li className="card-box-btn">
            <Icon changeColor={this.changeColor} color={this.state.color}/>
            <Button text ='add to card' onClick={handleModal}/>
            </li>
        </ul>
    )
}

}
CardItem.propTypes = {
    article: PropTypes.string,
    addToFavorite: PropTypes.func,
    name: PropTypes.string,
    color: PropTypes.string,
    path: PropTypes.string,
    price: PropTypes.string,
    handleModal: PropTypes.func,
    updateFavorite: PropTypes.func
  };