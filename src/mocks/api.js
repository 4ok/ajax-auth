import cookie from 'js-cookie'

import { users } from '~/mocks'

const COOKIE_EXPIRES_DAYS = 7

const responses = {
	login: {
		success: { status: 200 },
		fail: { status: 401 },
	},
	checkAuth: {
		success: { status: 200 },
		fail: { status: 401 },
	},
	logout: { success: { status: 200 } },
}

const getResponse = (response, data) => {
	return {
		...response,
		json: () => Promise.resolve(data || {}),
	}
}

export default {
	post: {
		'/api/v1.0/user/login': (body) => {
			const { login, password } = JSON.parse(body)

			const userId = Object
				.keys(users)
				.find((id) => {
					const user = users[id]

					return (login === user.login && password === user.password)
				})

			if (userId) {
				const user = users[userId]

				// Stub for httpOnly cookie. Must be sent from the server
				cookie.set('session', users[userId].session, { expires: COOKIE_EXPIRES_DAYS })

				return getResponse(
					responses.login.success,
					{ user }
				)
			}

			return getResponse(responses.login.fail)
		},
		'/api/v1.0/user/logout': () => {
			const userId = Object
				.keys(users)
				.find(id => cookie.get('session') === users[id].session)

			if (userId) {
				// Must be sent from the server
				cookie.remove('session')

				return getResponse(
					responses.checkAuth.success,
					{ user: users[userId] }
				)
			}

			return getResponse(responses.checkAuth.fail)
		},
	},
	get: {
		'/api/v1.0/user/current': () => {
			const userId = Object
				.keys(users)
				.find(id => cookie.get('session') === users[id].session)

			if (userId) {
				return getResponse(
					responses.checkAuth.success,
					{ user: users[userId] }
				)
			}

			return getResponse(responses.checkAuth.fail)
		},
	},
}
