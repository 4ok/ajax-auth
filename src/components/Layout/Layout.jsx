import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Layout as AntdLayout } from 'antd'

import Header from '~/components/Header/Header'
import Content from '~/components/Content/Content'
import Footer from '~/components/Footer/Footer'

import './Layout.css'

class Layout extends PureComponent {

	static propTypes = { children: PropTypes.node.isRequired }

	render() {
		const { children } = this.props

		return (
			<AntdLayout className="Layout">
				<Header
					className="Layout__header"
				/>
				<Content className="Layout__content">
					{ children }
				</Content>
				<Footer className="Layout__footer" />
			</AntdLayout>
		)
	}
}

export default Layout
