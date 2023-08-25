# Завдання lesson-3
Сделать helpers функцию sendRequest для работы с API weatherapi.com

[doc](https://www.weatherapi.com/docs/)

[respons](http://api.weatherapi.com/v1/forecast.json?key=5602273dead74bb1989185726232603&q=kiev&days=5&aqi=no&alerts=no')


API_URL http://api.weatherapi.com/v1/forecast.json
API_KEY 5602273dead74bb1989185726232603

## Технічні вимоги
Описати propTypes для всіх компонентів

Додати для декілька defaultProps

Для отримання даних по температурі використати функцію:
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

