import React, { PureComponent } from 'react'
import { Card, CardBody, Progress } from 'reactstrap'
import classNames from 'classnames'

interface IProp {
	header: string
	mainText: string
	smallText: string
	color: string
	value: string
	children?: any
	className?: string
	cssModule?: any
	variant: string
}

class Widget01 extends PureComponent<IProp> {
	static defaultProps = {
		header: '89.9%',
		mainText: 'Lorem ipsum...',
		smallText: 'Lorem ipsum dolor sit amet enim.',
		// color: '',
		value: '25',
		variant: '',
	}

	render() {
		const { className, cssModule, header, mainText, smallText, color, value, children, variant, ...attributes } = this.props

		// demo purposes only
		const progress = { style: '', color: color, value: value }
		const card = { style: '', bgColor: '' }

		if (variant === 'inverse') {
			progress.style = 'progress-white'
			progress.color = ''
			card.style = 'text-white'
			card.bgColor = 'bg-' + color
		}

		const classes = classNames(className, card.style, card.bgColor)
		progress.style = classNames('progress-xs my-1', progress.style)

		return (
			<Card className={classes} {...attributes}>
				<CardBody>
					<div className="h4 m-0">{header}</div>
					<div>{mainText}</div>
					<Progress className={progress.style} color={progress.color} value={progress.value} />
					<small className="text-muted">{smallText}</small>
					<div>{children}</div>
				</CardBody>
			</Card>
		)
	}
}

export default Widget01
