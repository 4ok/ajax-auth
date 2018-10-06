import React from 'react'
import PropTypes from 'prop-types'

import { Layout } from 'antd'

import cn from 'classnames'

import './Footer.css'

const { Footer: AntdFooter } = Layout

Footer.propTypes = { className: PropTypes.string.isRequired }

function Footer(props) {
	const { className } = props

	return (
		<AntdFooter className={ cn(className, 'Footer') } role="contentinfo">
			Copyright © 2018
		</AntdFooter>
	)
}


export default Footer
