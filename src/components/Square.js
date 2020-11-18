import React, { Component } from 'react'

class Square extends Component {
	handleClick = () => {
		this.props.handleGamePlay(this.props.index)
	}

	render() {
		let { value } = this.props
		return (
			<React.Fragment>
				<div id='square' onClick={this.handleClick}>
					{value}
				</div>
			</React.Fragment>
		)
	}
}

export default Square
