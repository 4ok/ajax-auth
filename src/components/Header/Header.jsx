import cn from 'classnames'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Layout } from 'antd'

import Logout from '~/components/Logout/Logout'

import './Header.css'

const { Header: AntdHeader } = Layout

class Header extends PureComponent {

	static propTypes = {
		className: PropTypes.string.isRequired,
		userLogged: PropTypes.bool.isRequired,
	}

	render() {
		const {
			className,
			userLogged,
		} = this.props

		return (
			<AntdHeader className={ cn(className, 'Header') } role="banner">
				<a href="." className="Header__logo">Logo</a>
				{ userLogged && <Logout /> }
			</AntdHeader>
		)
	}
}

export default connect(
	state => ({ userLogged: state.user.logged })
)(Header)
