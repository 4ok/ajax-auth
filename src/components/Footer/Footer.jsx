import React from 'react'
import PropTypes from 'prop-types'

import { Layout } from 'antd'

import cn from 'classnames'

import './Footer.css'

const { Footer: AntdFooter } = Layout

const COPYRIGHT_YEAR_FROM = 2018

Footer.propTypes = { className: PropTypes.string.isRequired }

function Footer(props) {
	const { className } = props

	const copyright = () => {
		const yearFrom = COPYRIGHT_YEAR_FROM
		const yearTo = new Date().getFullYear()
		const years = (yearFrom === yearTo) ? yearFrom : `${ yearFrom }-${ yearTo }`

		return `Copyright © ${ years }`
	}

	return (
		<AntdFooter className={ cn(className, 'Footer') } role="contentinfo">
			{ copyright() }
		</AntdFooter>
	)
}


export default Footer
