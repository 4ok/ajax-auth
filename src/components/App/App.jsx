import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Spin } from 'antd'

import Layout from '~/components/Layout/Layout'
import Login from '~/components/Login/Login'
import Welcome from '~/components/Welcome/Welcome'

import { check as checkAuth } from '~/actions/auth'

class App extends PureComponent {

	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		checkingAuth: PropTypes.bool.isRequired,
		userLogged: PropTypes.bool.isRequired,
		userName: PropTypes.string,
	}

	static defaultProps = { userName: null }

	componentDidMount() {
		const { dispatch } = this.props

		dispatch(checkAuth())
	}

	render() {
		const {
			checkingAuth,
			userLogged,
			userName,
		} = this.props

		const content = userLogged
			? <Welcome userName={ userName } />
			: <Login />

		return (
			<Layout
				userLogged={ userLogged }
				checkingAuth={ checkingAuth }
			>
				{ checkingAuth
					? <Spin className="Layout__spin" size="large" />
					: content
				}
			</Layout>
		)
	}
}

export default connect(
	state => ({
		checkingAuth: state.auth.checking,
		userLogged: state.user.logged,
		userName: state.user.name,
	})
)(App)
