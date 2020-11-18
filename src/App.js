import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			squares: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
		}
	}

	render() {
		// destructure variable from state
		let { squares } = this.state
		return (
			<React.Fragment>
				<h1>Treasure Hunt App</h1>
				<div id='gameboard'>
					{squares.map((value, index) => {
						return <Square value={value} key={index} />
					})}
				</div>
			</React.Fragment>
		)
	}
}
export default App
