export default ({
	login: {
		method: 'post',
		version: '1.0',
		path: 'user/login',
	},
	checkAuth: {
		method: 'get',
		version: '1.0',
		path: 'user/current',
	},
	logout: {
		method: 'post',
		version: '1.0',
		path: 'user/logout',
	},
})
