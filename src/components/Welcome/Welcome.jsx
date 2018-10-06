import React from 'react'
import PropTypes from 'prop-types'

import './Welcome.css'

Welcome.propTypes = { userName: PropTypes.string.isRequired }

function Welcome(props) {
	const { userName } = props

	return (
		<div className="Welcome">
			<h1>Welcome, { userName }!</h1>
		</div>
	)
}

export default Welcome
