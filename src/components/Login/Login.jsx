import { autobind } from 'core-decorators'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
	Form,
	Icon,
	Input,
	Button,
} from 'antd'

import { login } from '~/actions/auth'

import './Login.css'

const FormItem = Form.Item

@autobind
class Login extends PureComponent {

	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		logining: PropTypes.bool.isRequired,
		error: PropTypes.string,
		form: PropTypes.objectOf(PropTypes.func).isRequired,
	}

	static defaultProps = { error: null }

	static fields = {
		login: {
			params: {
				rules: [{
					required: true,
					message: 'Please input your login!',
				}],
			},
			elem: (
				<Input
					prefix={ <Icon type="user" /> }
					placeholder="Login"
				/>
			),
		},
		password: {
			params: {
				rules: [{
					required: true,
					message: 'Please input your Password!',
				}],
			},
			elem: (
				<Input
					prefix={ <Icon type="lock" /> }
					type="password"
					placeholder="Password"
				/>
			),
		},
	}

	onSubmit(e) {
		const { form, dispatch } = this.props

		e.preventDefault()

		form.validateFields((err, data) => {

			if (err) {
				return
			}

			dispatch(login(data))
		})
	}

	render() {
		const { fields } = Login
		const { logining, error, form } = this.props
		const { getFieldDecorator } = form

		return (
			<div className="Login">
				<h1>Please login</h1>
				<Form onSubmit={ this.onSubmit } className="Login__form">
					<div className="Login__error ant-form-explain">
						{ error }
					</div>
					{ Object
						.keys(fields)
						.map((key) => {
							const { params, elem } = fields[key]

							return (
								<FormItem key={ key } className="Login__input">
									{getFieldDecorator(key, params)(elem)}
								</FormItem>
							)
						})
					}
					<FormItem>
						<Button
							type="primary"
							htmlType="submit"
							className="Login__submit"
							icon="login"
							loading={ logining }
							disabled={ logining }
						>
							Login
						</Button>
					</FormItem>
				</Form>
			</div>
		)
	}
}

const FormLogin = Form.create()(Login)

export default connect(
	state => ({
		logining: state.auth.logining,
		error: state.auth.error,
	})
)(FormLogin)
