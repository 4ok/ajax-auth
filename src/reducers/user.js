import { actionsTypes as at } from '~/constants'

const initialState = { logged: false }

export default (state = initialState, action = {}) => {
	const { type, payload } = action

	switch (type) {
		case at.LOGIN_CHECK_RESOLVED:
		case at.LOGIN_RESOLVED: {
			return {
				...payload.user,
				logged: payload.success,
			}
		}
		case at.LOGIN_REJECTED: {
			return { logged: false }
		}
		case at.LOGOUT_RESOLVED: {
			return { logged: false }
		}
		default: {
			return state
		}
	}
}
