import React, { PureComponent } from 'react'
import { injectIntl, InjectedIntlProps } from 'react-intl'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem, NavLink as RsNavLink } from 'reactstrap'
import classNames from 'classnames'
import nav from './_nav'

class Sidebar extends PureComponent<InjectedIntlProps> {
	constructor(props: any) {
		super(props)

		this.handleClick = this.handleClick.bind(this)
		this.activeRoute = this.activeRoute.bind(this)
		this.hideMobile = this.hideMobile.bind(this)
	}

	handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		event.preventDefault()
		if (event.currentTarget.parentElement != null) {
			event.currentTarget.parentElement.classList.toggle('open')
		}
	}

	activeRoute(routeName: string, props: any) {
		// return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
		return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown'
	}

	hideMobile() {
		if (document.body.classList.contains('sidebar-mobile-show')) {
			document.body.classList.toggle('sidebar-mobile-show')
		}
	}

	render() {
		const props = this.props
		// simple wrapper for nav-title item
		const wrapper = (item: any) => {
			const name = props.intl.formatMessage({ id: item.name })
			return item.wrapper && item.wrapper.element ? React.createElement(item.wrapper.element, item.wrapper.attributes, name) : name
		}

		// nav list section title
		const title = (title: any, key: any) => {
			const classes = classNames('nav-title', title.class)
			return (
				<li key={key} className={classes}>
					{wrapper(title)}{' '}
				</li>
			)
		}

		// nav list divider
		const divider = (divider: any, key: any) => {
			const classes = classNames('divider', divider.class)
			return <li key={key} className={classes} />
		}

		// nav label with nav link
		const navLabel = (item: any, key: any) => {
			const classes = {
				item: classNames('hidden-cn', item.class),
				link: classNames('nav-label', item.class ? item.class : ''),
				icon: classNames(
					!item.icon ? 'fa fa-circle' : item.icon,
					item.label.variant ? `text-${item.label.variant}` : '',
					item.label.class ? item.label.class : ''
				),
			}
			return navLink(item, key, classes)
		}

		// nav item with nav link
		const navItem = (item: any, key: any) => {
			const classes = {
				item: classNames(item.class),
				link: classNames('nav-link', item.variant ? `nav-link-${item.variant}` : ''),
				icon: classNames(item.icon),
			}
			return navLink(item, key, classes)
		}

		// nav link
		const navLink = (item: any, key: any, classes: any) => {
			const url = item.url ? item.url : ''
			const name = props.intl.formatMessage({ id: item.name })
			return (
				<NavItem key={key} className={classes.item}>
					{isExternal(url) ? (
						<RsNavLink href={url} className={classes.link} active>
							<i className={classes.icon} />
							{name}
						</RsNavLink>
					) : (
						<NavLink to={url} className={classes.link} activeClassName="active" onClick={this.hideMobile}>
							<i className={classes.icon} />
							{name}
						</NavLink>
					)}
				</NavItem>
			)
		}

		// nav dropdown
		const navDropdown = (item: any, key: any) => {
			const name = props.intl.formatMessage({ id: item.name })
			return (
				<li key={key} className={this.activeRoute(item.url, props)}>
					<a className="nav-link nav-dropdown-toggle" onClick={this.handleClick}>
						{/* <i className={item.icon} /> */}
						{name}
					</a>
					<ul className="nav-dropdown-items">{navList(item.children)}</ul>
				</li>
			)
		}

		// nav type
		const navType = (item: any, idx: any) =>
			item.title
				? title(item, idx)
				: item.divider
				? divider(item, idx)
				: item.label
				? navLabel(item, idx)
				: item.children
				? navDropdown(item, idx)
				: navItem(item, idx)

		// nav list
		const navList = (items: any) => {
			return items.map((item: any, index: any) => navType(item, index))
		}

		const isExternal = (url: string) => {
			const link = url ? url.substring(0, 4) : ''
			return link === 'http'
		}

		// sidebar-nav root
		return (
			<div className="sidebar">
				<nav className="sidebar-nav">
					<Nav>{navList(nav.items)}</Nav>
				</nav>
			</div>
		)
	}
}

export default injectIntl(Sidebar)
