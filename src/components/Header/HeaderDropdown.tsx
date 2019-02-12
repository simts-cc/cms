import React, { PureComponent } from 'react'
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Dropdown, Progress } from 'reactstrap'
import { injectIntl, InjectedIntlProps } from 'react-intl'

interface IProp extends InjectedIntlProps {
	notif?: boolean
	accnt?: boolean
	tasks?: boolean
	mssgs?: boolean
	logout?(): void
	changeLocale?(lang: string): void
}

interface IState {
	dropdownOpen: boolean
}

class HeaderDropdown extends PureComponent<IProp, IState> {
	static defaultProps = {
		notif: false,
		accnt: false,
		tasks: false,
		mssgs: false,
	}

	constructor(props: any) {
		super(props)

		this.toggle = this.toggle.bind(this)
		this.state = {
			dropdownOpen: false,
		}
	}

	changeLocale(lang: string) {
		const { changeLocale } = this.props
		if (changeLocale) {
			changeLocale(lang)
		}
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen,
		})
	}

	dropNotif() {
		const itemsCount = 5
		const { intl } = this.props

		return (
			<Dropdown nav className="d-md-down-none" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle nav>
					<i className="icon-bell" />
					<Badge pill color="danger">
						{itemsCount}
					</Badge>
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem header tag="div" className="text-center">
						<strong>{intl.formatMessage({ id: 'CountNotify' }, { itemsCount })}</strong>
					</DropdownItem>
					<DropdownItem>
						<i className="icon-user-follow text-success" />
						{intl.formatMessage({ id: 'Notifications' })} 1
					</DropdownItem>
					<DropdownItem>
						<i className="icon-user-unfollow text-danger" />
						{intl.formatMessage({ id: 'Notifications' })} 2
					</DropdownItem>
					<DropdownItem>
						<i className="icon-chart text-info" />
						{intl.formatMessage({ id: 'Notifications' })} 3
					</DropdownItem>
					<DropdownItem>
						<i className="icon-basket-loaded text-primary" />
						{intl.formatMessage({ id: 'Notifications' })} 4
					</DropdownItem>
					<DropdownItem>
						<i className="icon-speedometer text-warning" />
						{intl.formatMessage({ id: 'Notifications' })} 5
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		)
	}

	dropTasks() {
		const itemsCount = 15
		const { intl } = this.props

		return (
			<Dropdown nav className="d-md-down-none" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle nav>
					<i className="icon-list" />
					<Badge pill color="warning">
						{itemsCount}
					</Badge>
				</DropdownToggle>
				<DropdownMenu right className="dropdown-menu-lg">
					<DropdownItem header tag="div" className="text-center">
						<strong>{intl.formatMessage({ id: 'CountTasks' }, { itemsCount })}</strong>
					</DropdownItem>
					<DropdownItem>
						<div className="small mb-1">
							{intl.formatMessage({ id: 'Task' })} 1
							<span className="float-right">
								<strong>0%</strong>
							</span>
						</div>
						<Progress className="progress-xs" color="info" value={0} />
					</DropdownItem>
					<DropdownItem>
						<div className="small mb-1">
							{intl.formatMessage({ id: 'Task' })} 2
							<span className="float-right">
								<strong>25%</strong>
							</span>
						</div>
						<Progress className="progress-xs" color="danger" value={25} />
					</DropdownItem>
					<DropdownItem>
						<div className="small mb-1">
							{intl.formatMessage({ id: 'Task' })} 3
							<span className="float-right">
								<strong>50%</strong>
							</span>
						</div>
						<Progress className="progress-xs" color="warning" value={50} />
					</DropdownItem>
					<DropdownItem>
						<div className="small mb-1">
							{intl.formatMessage({ id: 'Task' })} 4
							<span className="float-right">
								<strong>75%</strong>
							</span>
						</div>
						<Progress className="progress-xs" color="info" value={75} />
					</DropdownItem>
					<DropdownItem>
						<div className="small mb-1">
							{intl.formatMessage({ id: 'Task' })} 5
							<span className="float-right">
								<strong>100%</strong>
							</span>
						</div>
						<Progress className="progress-xs" color="success" value={100} />
					</DropdownItem>
					<DropdownItem className="text-center">
						<strong>{intl.formatMessage({ id: 'ViewAllTasks' })}</strong>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		)
	}

	dropAccnt() {
		const { logout, changeLocale, intl } = this.props
		return (
			<Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle nav>
					<i className="icon-list" />
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem header tag="div" className="text-center">
						<strong>{intl.formatMessage({ id: 'Settings' })}</strong>
					</DropdownItem>
					<DropdownItem onClick={() => this.changeLocale('zhTW')}>
						<i className="fa flag-icon flag-icon-tw" /> 中文(臺灣)
					</DropdownItem>
					<DropdownItem onClick={() => this.changeLocale('zhCN')}>
						<i className="fa flag-icon flag-icon-cn" /> 中文(中国)
					</DropdownItem>
					<DropdownItem onClick={() => this.changeLocale('enUS')}>
						<i className="fa flag-icon flag-icon-us" /> English
					</DropdownItem>
					<DropdownItem divider />
					<DropdownItem header tag="div" className="text-center">
						<strong>{intl.formatMessage({ id: 'Account' })}</strong>
					</DropdownItem>
					<DropdownItem onClick={logout}>
						<i className="fa fa-lock" />
						{intl.formatMessage({ id: 'LogOut' })}
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		)
	}

	render() {
		const { notif, accnt, tasks } = this.props
		return notif ? this.dropNotif() : accnt ? this.dropAccnt() : tasks ? this.dropTasks() : null
	}
}

export default injectIntl(HeaderDropdown)
