import { actionsTypes as at } from '~/constants'

const initialState = {
	checking: false,
	logining: false,
}

export default (state = initialState, action = {}) => {
	const { type, payload } = action

	switch (type) {
		case at.LOGIN_CHECK_PENDING: {
			return {
				...state,
				checking: true,
			}
		}
		case at.LOGIN_CHECK_RESOLVED:
		case at.LOGIN_CHECK_REJECTED: {
			return {
				...state,
				checking: false,
			}
		}
		case at.LOGIN_PENDING: {
			return {
				...state,
				logining: true,
				error: null,
			}
		}
		case at.LOGIN_RESOLVED: {
			return {
				...state,
				logining: false,
				error: payload.error,
			}
		}
		case at.LOGIN_REJECTED: {
			return {
				...state,
				logining: false,
				error: payload.error,
			}
		}
		case at.LOGOUT_PENDING: {
			return {
				...state,
				checking: true,
			}
		}
		case at.LOGOUT_RESOLVED: {
			return {
				...state,
				checking: false,
			}
		}
		default: {
			return state
		}
	}
}
