import React from 'react'
import PropTypes from 'prop-types'

import { Layout } from 'antd'

import cn from 'classnames'

import './Content.css'

const { Content: AntdContent } = Layout

Content.propTypes = {
	className: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

function Content(props) {
	const { className, children } = props

	return (
		<AntdContent className={ cn(className, 'Content') } role="main">
			{ children }
		</AntdContent>
	)
}


export default Content
