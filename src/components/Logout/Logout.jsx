import { autobind } from 'core-decorators'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Menu } from 'antd'

import { logout } from '~/actions/auth'

import './Logout.css'

@autobind
class Logout extends PureComponent {

	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		checkingAuth: PropTypes.bool.isRequired,
	}

	logout() {
		const { dispatch } = this.props

		dispatch(logout())
	}

	render() {
		const { checkingAuth } = this.props

		return (
			<Menu theme="dark" mode="horizontal" selectable={ false }>
				<Menu.Item
					disabled={ checkingAuth }
					className="Logout"
					onClick={ this.logout }
				>
					Logout
				</Menu.Item>
			</Menu>
		)
	}
}

export default connect(
	state => ({ checkingAuth: state.auth.checking })
)(Logout)
