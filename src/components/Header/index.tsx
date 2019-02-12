import React, { PureComponent } from 'react'
import { Nav, NavbarBrand, NavbarToggler } from 'reactstrap'
import HeaderDropdown from './HeaderDropdown'

interface IProp {
	logout?(): void
	changeLocale?(lang: string): void
}

class Header extends PureComponent<IProp> {
	mobileSidebarToggle(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
		event.preventDefault()
		document.body.classList.toggle('sidebar-mobile-show')
	}

	sidebarToggle(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		event.preventDefault()
		document.body.classList.toggle('sidebar-hidden')
	}

	render() {
		const { logout, changeLocale } = this.props

		return (
			<header className="app-header navbar">
				<NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
					<span className="navbar-toggler-icon" />
				</NavbarToggler>
				<NavbarBrand href="#" />
				<NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
					<span className="navbar-toggler-icon" />
				</NavbarToggler>
				<Nav className="ml-auto" navbar>
					<HeaderDropdown notif />
					<HeaderDropdown tasks />
					<HeaderDropdown accnt logout={logout} changeLocale={changeLocale} />
				</Nav>
			</header>
		)
	}
}

export default Header
