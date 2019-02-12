import React, { PureComponent } from 'react'
import classNames from 'classnames'

interface IProp {
	className?: string
	cssModule?: any
	dataBox(): any
}

class Widget03 extends PureComponent<IProp> {
	static defaultProps = {
		dataBox: () => ({ variant: 'facebook', friends: '-', feeds: '-' }),
	}

	render() {
		const { className, cssModule, dataBox } = this.props

		// demo purposes only
		const data = dataBox()
		const variant = data.variant

		if (!variant || ['facebook', 'twitter', 'linkedin', 'google-plus'].indexOf(variant) < 0) {
			return null
		}

		const icon = 'fa fa-' + variant
		const keys = Object.keys(data)
		const vals = Object.values(data)

		const classes = classNames('social-box', className, variant)

		return (
			<div className={classes}>
				<i className={icon} />
				<ul>
					<li>
						<strong>{vals[1]}</strong>
						<span>{keys[1]}</span>
					</li>
					<li>
						<strong>{vals[2]}</strong>
						<span>{keys[2]}</span>
					</li>
				</ul>
			</div>
		)
	}
}

export default Widget03
