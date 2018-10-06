import { api } from '~/mocks'

const REQUEST_TIMEOUT = 1000

export default function fetch(url, options = {}) {
	const hash = Math
		.random()
		.toString(16)
		.slice(2, 8)

	// eslint-disable-next-line no-console
	console.info(`[[ fetch::${ hash }::request ]]`, url, options)

	return new Promise(resolve => setTimeout(() => {
		const { body } = options
		const method = options.method.toLowerCase()
		const response = api[method][url](body)

		resolve(response)

		response
			.json()
			.then((data) => {
				const result = {
					...response,
					json: data,
				}

				// eslint-disable-next-line no-console
				console.info(`[[ fetch::${ hash }::response ]]`, result)
			})
	}, REQUEST_TIMEOUT))
}
