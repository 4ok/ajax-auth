import { fetch as fetchStub } from '~/stubs'

const dataTypes = { JSON: 'json' }

const headers = {
	[dataTypes.JSON]: {
		Accept: 'application/json',
		'Content-Type': 'application/json; charset=utf-8',
	},
}

const getBody = (type, data) => {

	switch (type) {
		case dataTypes.JSON: {
			return JSON.stringify(data)
		}
		default: {
			return null
		}
	}
}

export default ({ api, data, dataType = 'json' }) => {
	const { method = 'get', path, version } = api

	if (!path) {
		throw new Error('Api method path isn\'t specified')
	}

	if (!version) {
		throw new Error('Api method version isn\'t specified')
	}

	const url = `/api/v${ version }/${ path }`
	const options = {
		method: method.toUpperCase(),
		headers: headers[dataType],
		credentials: 'include',
	}

	if (data) {
		options.body = getBody(dataType, data)
	}

	return fetchStub(url, options)
}
