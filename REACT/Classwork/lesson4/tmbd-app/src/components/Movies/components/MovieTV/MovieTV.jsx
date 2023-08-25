import React from "react";
import  {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import sendRequest from '../../../../helpers/sendRequest'
import {API_URL,API_KEY_3,IMG_URL} from '../../../../configs/API'
export default class MovieTV extends React.Component{
	state = {data : []}
	componentDidMount() {
		sendRequest(`${API_URL}/discover/tv?api_key=${API_KEY_3}`).then(({results})=>{
			this.setState({data: results})
		})
	}

	render() {
		const {data} = this.state;
		const {handelCurrentFilm, modal} = this.props;
		const sliderSlide = data.length!==0 && data?.map((elem)=>(<SwiperSlide key={elem.id} className="film__item">
				<div className="film-poster" onClick={()=>{handelCurrentFilm(elem);
				modal()
				}}>
					<img src={`${IMG_URL}${elem.poster_path}`} alt={elem.name}/>
				</div>
			</SwiperSlide>)
		)
		return(
			<>
			<div className="films__title">Популярное По TV</div>
		<div className="films__slider">
			<Swiper
				slidesPerView={5}
				spaceBetween={16}
				className="films__wrapper"
				navigation={true}
				grabCursor={false}
				draggable={false}
				preventClicksPropagation={true}
				preventClicks={true}
				scrollbar={{draggable: false, hide: true}}
				slideToClickedSlide={false}
				pagination={{clickable: true}}
			>
				{sliderSlide}
			</Swiper>
		</div>
			</>
		)
	}
}
