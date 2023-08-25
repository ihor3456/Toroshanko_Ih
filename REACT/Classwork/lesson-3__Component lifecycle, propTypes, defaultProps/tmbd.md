# Завдання lesson-3
Сделать helpers функцию sendRequest для работы с API themoviedb.org

[doc - movie-discover](https://developers.themoviedb.org/3/discover/movie-discover)

[doc - tv-discover](https://developers.themoviedb.org/3/discover/tv-discover)

API_URL  "https://api.themoviedb.org/3";

IMG_URL  "https://image.tmdb.org/t/p/w500";

API_KEY_3  "3f4ca4f3a9750da53450646ced312397";

Сделать компонет Header

```html
<header class="header">
	<div class="container">
		<div class="header__wrapper">
			<div class="header__logo">
				<a href="#" class="logo">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.42 35.52">
						<defs>
							<linearGradient
									id="a"
									x2="273.42"
									y1="17.76"
									y2="17.76"
									gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stopColor="#90cea1"></stop>
								<stop offset="0.56" stopColor="#3cbec9"></stop>
								<stop offset="1" stopColor="#00b3e5"></stop>
							</linearGradient>
						</defs>
						<g data-name="Layer 2">
							<path
									fill="url(#a)"
									d="M191.85 35.37h63.9a17.67 17.67 0 0017.67-17.67A17.67 17.67 0 00255.75 0h-63.9a17.67 17.67 0 00-17.67 17.7 17.67 17.67 0 0017.67 17.67zm-181.75.05h7.8V6.92H28V0H0v6.9h10.1zm28.1 0H46V8.25h.1l8.95 27.15h6L70.3 8.25h.1V35.4h7.8V0H66.45l-8.2 23.1h-.1L50 0H38.2zM89.14.12h11.7a33.56 33.56 0 018.08 1 18.52 18.52 0 016.67 3.08 15.09 15.09 0 014.53 5.52 18.5 18.5 0 011.67 8.25 16.91 16.91 0 01-1.62 7.58 16.3 16.3 0 01-4.38 5.5 19.24 19.24 0 01-6.35 3.37 24.53 24.53 0 01-7.55 1.15H89.14zm7.8 28.2h4a21.66 21.66 0 005-.55A10.58 10.58 0 00110 26a8.73 8.73 0 002.68-3.35 11.9 11.9 0 001-5.08 9.87 9.87 0 00-1-4.52 9.17 9.17 0 00-2.63-3.18A11.61 11.61 0 00106.22 8a17.06 17.06 0 00-4.68-.63h-4.6zM133.09.12h13.2a32.87 32.87 0 014.63.33 12.66 12.66 0 014.17 1.3 7.94 7.94 0 013 2.72 8.34 8.34 0 011.15 4.65 7.48 7.48 0 01-1.67 5 9.13 9.13 0 01-4.43 2.82V17a10.28 10.28 0 013.18 1 8.51 8.51 0 012.45 1.85 7.79 7.79 0 011.57 2.62 9.16 9.16 0 01.55 3.2 8.52 8.52 0 01-1.2 4.68 9.32 9.32 0 01-3.1 3 13.38 13.38 0 01-4.27 1.65 22.5 22.5 0 01-4.73.5h-14.5zm7.8 14.15h5.65a7.65 7.65 0 001.78-.2 4.78 4.78 0 001.57-.65 3.43 3.43 0 001.13-1.2 3.63 3.63 0 00.42-1.8A3.3 3.3 0 00151 8.6a3.42 3.42 0 00-1.23-1.13A6.07 6.07 0 00148 6.9a9.9 9.9 0 00-1.85-.18h-5.3zm0 14.65h7a8.27 8.27 0 001.83-.2 4.67 4.67 0 001.67-.7 3.93 3.93 0 001.23-1.3 3.8 3.8 0 00.47-1.95 3.16 3.16 0 00-.62-2 4 4 0 00-1.58-1.18 8.23 8.23 0 00-2-.55 15.12 15.12 0 00-2.05-.15h-5.9z"
									data-name="Layer 1"
							></path>
						</g>
					</svg>
				</a>
			</div>
			<div class="header__actions">
				<div class="header__favorites-list">
					Cписок избранных

					<span class="icon-favorite">
                        <span class="count">count</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16.2 8.1c-.2.1-.3.1-.4 0-4-5.7-11.6-1.7-11.6 3.8 0 4.8 6.1 8.7 11 14.1 0 0 0 .1.1.1.4.4 1 .3 1.4-.1 4.9-5.4 11-9.2 11-14.1.1-5.5-7.2-9.5-11.5-3.8z" /></svg>
                    </span>
				</div>
			</div>
		</div>
	</div>
</header>
```
Style
```scss
.header {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(3, 37, 65, 1);
	min-height: 64px;
	width: 100%;
	transition: top 0.2s linear;

	.header__logo {
		.logo {
			display: block;
			width: 154px;
		}
	}

	.header__actions {
		.header__favorites-list {
			display: flex;
			align-items: center;
			color: #fff;
			font-size: 16px;

			.icon-favorite {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 24px;
				margin-left: 8px;

				svg {
					width: 100%;
					fill: currentColor;
				}

				.count {
					position: absolute;
					top: -5px;
					right: -5px;
					font-size: 10px;
					color: #fff;
				}
			}
		}
	}

	.header__wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
```

Сделать компонет Footer

```html
<footer class="g-footer">
    <div class="copywriting">Footer (c) 2022</div>
</footer>
```
Style
```scss
.g-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(3,37,65, 1);
    min-height: 64px;
    width: 100%;
    
    .copywriting {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
    }
}

```

Сделать компонет Button

```scss
.btn {
	position: relative;
	display: inline-flex;
	vertical-align: middle;
	text-align: center;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	text-decoration: none !important;
	outline: none;
	-webkit-appearance: none;
	border: none;
	cursor: pointer;
	user-select: none;
	background-color: #6b78d6;
	font-family: Roboto, sans-serif;
	font-weight: 400;
	font-size: 16px;
	text-transform: uppercase;
	color: #fff;
	padding: 8px 32px;
}
```



Сделать компонет Modal

```html
<div class="modal-wrapper">
    <div class="modal">
        <div class="modal-box">
            <button type="button" class="modal-close">
                <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                        d="m9.3 8 6.1-6.1c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L8 6.7 1.9.6C1.6.3 1 .3.6.6c-.3.4-.3 1 0 1.3L6.7 8 .6 14.1c-.4.4-.3.9 0 1.3l.1.1c.4.3.9.2 1.2-.1L8 9.3l6.1 6.1c.4.4.9.4 1.3 0s.4-.9 0-1.3L9.3 8z"/>
                </svg>
            </button>
            <div class="modal-header">
                <h4>Modal</h4>
            </div>
            <div class="modal-content">
                КІНО => {title}
            </div>
            <div class="modal-footer">
                <div class="button-wrapper">
                    <button class="btn" type="button" >OK</button>
                    <button class="btn" type="button" >Cancel</button>
                </div>
            </div>
        </div>
    </div>
</div>
```
Style
```scss
.modal-wrapper {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 100;
	background-color: rgba(0, 0, 0, 0.4);
}

.modal {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 560px;
	width: 100%;
	padding: 40px;
	box-sizing: border-box;
	background-color: #fff;
	border-radius: 4px;

	.modal-close {
		position: absolute;
		right: 16px;
		top: 16px;
		display: inline-flex;
		vertical-align: middle;
		text-align: center;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		text-decoration: none !important;
		outline: none;
		-webkit-appearance: none;
		border: none;
		cursor: pointer;
		user-select: none;
		background-color: transparent;
	}

	.modal-header {
		margin-bottom: 24px;
		font-size: 36px;
	}

	h4 {
		margin: 0;
	}

	.modal-content {
	}

	.modal-footer {
		margin-top: 24px;
	}

	.button-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}

.input {

	.input-box {
		height: 41px;
		width: 100%;
		border-radius: 4px;
		border: 1px solid #c7cccf;
		padding: 0 16px;
		box-sizing: border-box;
		line-height: normal;
		font-size: 24px;
	}
}
```

Сделать компонет Movies

```html
<div class="films__title">Популярное По TV</div>
<div class="films__slider">
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
            <div class="film-poster">
                <img src="IMG_URL poster_path" alt='title'/>
            </div>
        </SwiperSlide>
    </Swiper>
</div>
<div class="films__title">Популярное В кинотеатрах</div>
<div class="films__slider">
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
            <div class="film-poster">
                <img src="IMG_URL poster_path" alt='title'/>
            </div>
        </SwiperSlide>
    </Swiper>
</div>
```

## Технічні вимоги
Для комонента Movies нужно будет использовать пакет swiper

```jsx
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css"
```

Картка film-poster повинна мати функцію яка відкриває попап,
Попап повинен мати функцію закриття, та функция яка підтвердить добавлення фільма до фаворит списку. 
( Це повинен буди массив який поповнюеться обьектами обранних фільмів)

и стили
```scss
.films__title {
	position: relative;
	display: inline;
	margin: 0 26px;
	font-size: 32px;
	font-weight: 600;

	&:before {
		content: '';
		display: block;
		position: absolute;
		bottom: -12px;
		left: 0;
		width: 16%;
		height: 6px;
		border-radius: 6px;
		background-color: #afaeae;
	}
}

.films__wrapper {
	display: flex;
	flex-wrap: wrap;
	padding: 50px 0;

	&.pending {
		flex-wrap: nowrap;
		padding: 40px 26px;
		box-sizing: border-box;

		.film__item {
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 594px;
			border-radius: 4px;
			background-color: #dbdbdb;

			svg {
				width: 220px;
			}

			&:hover {
				transform: scale(1.1);
				z-index: 10;
			}
		}
	}

	.swiper-wrapper {
		padding: 40px 26px;
		box-sizing: border-box;
	}

	.film__item {
		flex-shrink: 0;
		box-sizing: border-box;
		width: 20%;
		margin-right: 16px;
		cursor: pointer;
		transition: all 450ms;

		&:hover {
			margin-right: 36px !important;

			.film-poster {
				img {
					transform: scale(1.1);
					z-index: 10;
				}
			}
		}

		.film-poster {
			img {
				position: relative;
				border-radius: 4px;
				height: 100%;
				width: 100%;
				object-fit: contain;
				transition: transform 0.25s;
			}
		}
	}
}

.films__slider {
	overflow: hidden;
}

```

Описати propTypes для Movies

Для отримання даних використати функцію:
```js
export const sendRequest = async (url) => {
	const response = await fetch(url);
	const result = await response.json();
	return result;
}
```


### Нові пакети
```
npm i -D @babel/plugin-syntax-dynamic-import @babel/preset-env @babel/preset-react
npm install --save prop-types classnames
```

babel.config
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "env": {
    "test": {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
      ],
      "plugins": [
        "@babel/plugin-syntax-dynamic-import"
      ]
    }
  },
  "plugins": [
    "@babel/plugin-syntax-dynamic-import"
  ]
}

```

