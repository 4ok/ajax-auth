import { fetchApi } from '~/utils'
import api from '~/api'
import { actionsTypes as at } from '~/constants'

const errors = {
	internal: 'Internal error. Please try again later.',
	login: 'Invalid login or password',
}

export const check = () => (dispatch) => {
	const params = { api: api.checkAuth }

	dispatch({ type: at.LOGIN_CHECK_PENDING })

	fetchApi(params)
		.then(response => ((response.status === 200) ? response.json() : {}))
		.then((json) => {
			const { user } = json

			return dispatch({
				type: at.LOGIN_CHECK_RESOLVED,
				payload: {
					success: Boolean(user),
					user,
				},
			})
		})
		.catch(dispatch.bind(dispatch, { type: at.LOGIN_CHECK_REJECTED }))
}

export const login = data => (dispatch) => {
	const params = {
		api: api.login,
		data,
	}

	dispatch({ type: at.LOGIN_PENDING })

	fetchApi(params)
		.then(response => ((response.status === 200) ? response.json() : {}))
		.then((json) => {
			const { user } = json

			dispatch({
				type: at.LOGIN_RESOLVED,
				payload: {
					success: Boolean(user),
					error: user ? null : errors.login,
					user,
				},
			})
		})
		.catch(dispatch.bind(dispatch, {
			type: at.LOGIN_REJECTED,
			payload: {
				user: null,
				error: errors.internal,
			},
		}))
}

export const logout = () => (dispatch) => {
	const params = { api: api.logout }

	dispatch({ type: at.LOGOUT_PENDING })

	fetchApi(params)
		.then(response => dispatch({
			type: at.LOGOUT_RESOLVED,
			payload: { success: (response.status === 200) },
		}))
		.catch(dispatch.bind(dispatch, { type: at.LOGOUT_REJECTED }))
}
