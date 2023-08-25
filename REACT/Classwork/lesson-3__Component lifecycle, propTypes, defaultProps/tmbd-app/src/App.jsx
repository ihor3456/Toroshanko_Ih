import {Component} from 'react'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal";
import Movies from "./components/Movies/Movies";

import './styles/styles.scss';

class App extends Component {
	state = {
isModal:false,
		currentFilm: {}
	}


	/*
	* https://ru.reactjs.org/docs/react-component.html#mounting
	*
	* Монтирование
	* При создании экземпляра компонента и его вставке в DOM, следующие методы вызываются в установленном порядке:
	* 1 constructor() - конструктор, в котором происходит начальная инициализация компонента - https://ru.reactjs.org/docs/react-component.html#constructor
	* 2 static getDerivedStateFromProps() - вызывается непосредственно перед вызовом метода render, как при начальном монтировании, так и при последующих обновлениях. Он должен вернуть объект для обновления состояния или null, чтобы ничего не обновлять. https://ru.reactjs.org/docs/react-component.html#static-getderivedstatefromprops
	* 3 render() - рендеринг компонента - единственный обязательный метод в классовом компоненте. - https://ru.reactjs.org/docs/react-component.html#render
	* 4 componentDidMount() - вызывается сразу после монтирования (то есть, вставки компонента в DOM). В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов. - https://ru.reactjs.org/docs/react-component.html#componentdidmount
	*
	*
	* Обновление
	* static getDerivedStateFromProps(props, state) - getDerivedStateFromProps вызывается непосредственно перед вызовом метода render, как при начальном монтировании, так и при последующих обновлениях. Он должен вернуть объект для обновления состояния или null, чтобы ничего не обновлять. - https://ru.reactjs.org/docs/react-component.html#static-getderivedstatefromprops
	* shouldComponentUpdate(nextProps, nextState) -  вызывается каждый раз при обновлении объекта props или state. В качестве параметра передаются новый объект props и state. Эта функция должна возвращать true (надо делать обновление) или false (игнорировать обновление). По умолчанию возвращается true. Но если функция будет возвращать false, то тем самым мы отключим обновление компонента, а последующие функции не будут срабатывать. https://ru.reactjs.org/docs/react-component.html#shouldcomponentupdate
	* render() - рендеринг компонента (если shouldComponentUpdate возвращает true) - https://ru.reactjs.org/docs/react-component.html#render
	* getSnapshotBeforeUpdate(prevProps, prevState) - вызывается непосредственно перед компонента. Он позволяет компоненту получить информацию из DOM перед возможным обновлением. Возвращает в качестве значения какой-то отдельный аспект, который передается в качестве третьего параметра в метод componentDidUpdate() и может учитываться в componentDidUpdate при обновлении. Если нечего возвращать, то возвращается значение null - https://ru.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
	* componentDidUpdate(prevProps, prevState, snapshot) - вызывается сразу после обновления компонента (если shouldComponentUpdate возвращает true). В качестве параметров передаются старые значения объектов props и state. Третий параметр - значение, которое возвращает метод getSnapshotBeforeUpdate - https://ru.reactjs.org/docs/react-component.html#componentdidupdate
	*
	*
	* Размонтирование - Этот метод вызывается при удалении компонента из DOM:
	* componentWillUnmount() - вызывается непосредственно перед размонтированием и удалением компонента. В этом методе выполняется необходимый сброс: отмена таймеров, сетевых запросов и подписок, созданных в componentDidMount(). - https://ru.reactjs.org/docs/react-component.html#componentwillunmount
	*
	*
	* */

	componentDidMount() {
		console.log('App is mounted => componentDidMount App Component');
		// console.log(this.state);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('App is Update => componentDidUpdate App Component');
		// console.log(this.state);
	}
handelToggleModal= ()=>{
		this.setState({isModal: !this.state.isModal})
}
handelCurrentFilm = (data)=>{
		this.setState({currentFilm: {...data}})
}
	render() {
const {currentFilm} = this.state;
		console.log(currentFilm)
		return (
		<div className="page__wrapper">
		<Header/>
			<main className="main">
<Movies handelCurrentFilm={this.handelCurrentFilm} modal={this.handelToggleModal}/>
			</main>
			<Footer/>
			{this.state.isModal && (
				<Modal
					closeModal={this.handelToggleModal}
					title={currentFilm.original_name}
					desc={currentFilm.overview}/>
			)}
		</div>
		)
	}
}

export default App;
