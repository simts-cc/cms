import React, { PureComponent } from 'react'
import { Card, CardBody, CardFooter } from 'reactstrap'
import classNames from 'classnames'

interface IProp {
	header: string
	mainText: string
	smallText?: string
	icon: string
	color: string
	value?: string
	children?: any
	className?: string
	cssModule?: any
	variant: string
	footer?: boolean
	link: string
}

class Widget02 extends PureComponent<IProp> {
	static defaultProps = {
		header: '$1,999.50',
		mainText: 'Income',
		icon: 'fa fa-cogs',
		color: 'primary',
		variant: '0',
		link: '#',
	}

	render() {
		const { className, cssModule, header, mainText, icon, color, footer, link, children, variant, ...attributes } = this.props

		// demo purposes only
		const padding =
			variant === '0'
				? { card: 'p-3', icon: 'p-3', lead: 'mt-2' }
				: variant === '1'
				? {
						card: 'p-0',
						icon: 'p-4',
						lead: 'pt-3',
				  }
				: { card: 'p-0', icon: 'p-4 px-5', lead: 'pt-3' }

		const card = { style: 'clearfix', color: color, icon: icon, classes: '' }
		card.classes = classNames(className, card.style, padding.card)

		const lead = { style: 'h5 mb-0', color: color, classes: '' }
		lead.classes = classNames(lead.style, 'text-' + card.color, padding.lead)

		const blockIcon = function(icon: string) {
			const classes = classNames(icon, 'bg-' + card.color, padding.icon, 'font-2xl mr-3 float-left')
			return <i className={classes} />
		}

		const cardFooter = function() {
			if (footer) {
				return (
					<CardFooter className="px-3 py-2">
						<a className="font-weight-bold font-xs btn-block text-muted" href={link}>
							View More
							<i className="fa fa-angle-right float-right font-lg" />
						</a>
					</CardFooter>
				)
			}
		}

		return (
			<Card>
				<CardBody className={card.classes} {...attributes}>
					{blockIcon(card.icon)}
					<div className={lead.classes}>{header}</div>
					<div className="text-muted text-uppercase font-weight-bold font-xs">{mainText}</div>
				</CardBody>
				{cardFooter()}
			</Card>
		)
	}
}

export default Widget02
