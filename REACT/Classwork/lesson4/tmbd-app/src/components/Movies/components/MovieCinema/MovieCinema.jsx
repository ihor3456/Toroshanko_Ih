import React from "react";
import  {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
export default class MovieCinema extends React.Component{
	render() {
		return(
			<>
				<div className="films__title">Популярное В кинотеатрах</div>
				<div className="films__slider">
					<Swiper
						slidesPerView={5}
						spaceBetween={16}
						class="films__wrapper"
						navigation={true}
						grabCursor={false}
						draggable={false}
						preventClicksPropagation={true}
						preventClicks={true}
						scrollbar={{draggable: false, hide: true}}
						slideToClickedSlide={false}
						pagination={{clickable: true}}
					>
						<SwiperSlide class="film__item">
							<div className="film-poster">
								<img src="IMG_URL poster_path" alt='title'/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</>
		)
	}
}

