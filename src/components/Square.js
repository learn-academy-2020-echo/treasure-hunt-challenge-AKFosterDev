import React, { Component } from 'react'

class Square extends Component {
	render() {
		let { value } = this.props
		return (
			<React.Fragment>
				<div id='square'>{value}</div>
			</React.Fragment>
		)
	}
}
export default Square
