import React, { PureComponent } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'reactstrap'
import Cookies from 'js-cookie'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Breadcrumb from '../../components/Breadcrumb'

import Home from '../../layouts/Home'

import Colors from '../../layouts/Theme/Colors'
import Typography from '../../layouts/Theme/Typography'

import Charts from '../../layouts/Charts'
import Widgets from '../../layouts/Widgets'

// Base
import Cards from '../../layouts/Base/Cards'
import Switches from '../../layouts/Base/Switches'
import Tabs from '../../layouts/Base/Tabs'
import Breadcrumbs from '../../layouts/Base/Breadcrumbs'
import Carousels from '../../layouts/Base/Carousels'
import Collapses from '../../layouts/Base/Collapses'
import Dropdowns from '../../layouts/Base/Dropdowns'
import Jumbotrons from '../../layouts/Base/Jumbotrons'
import ListGroups from '../../layouts/Base/ListGroups'
import Navbars from '../../layouts/Base/Navbars'
import Navs from '../../layouts/Base/Navs'
import Paginations from '../../layouts/Base/Paginations'
import Popovers from '../../layouts/Base/Popovers'
import ProgressBar from '../../layouts/Base/ProgressBar'
import Tooltips from '../../layouts/Base/Tooltips'

// Buttons
import Buttons from '../../layouts/Buttons/Buttons'
import ButtonDropdowns from '../../layouts/Buttons/ButtonDropdowns'
import ButtonGroups from '../../layouts/Buttons/ButtonGroups'
import LoadingButtons from '../../layouts/Buttons/LoadingButtons'
import SocialButtons from '../../layouts/Buttons/SocialButtons'

// Editors
import TextEditors from '../../layouts/Editors/TextEditors'
import CodeEditors from '../../layouts/Editors/CodeEditors'

// Forms
import BasicForms from '../../layouts/Forms/BasicForms'
import AdvancedForms from '../../layouts/Forms/AdvancedForms'

import GoogleMaps from '../../layouts/GoogleMaps'

// Icons
import FontAwesome from '../../layouts/Icons/FontAwesome'
import SimpleLineIcons from '../../layouts/Icons/SimpleLineIcons'

// Notifications
import Alerts from '../../layouts/Notifications/Alerts'
import Badges from '../../layouts/Notifications/Badges'
import Modals from '../../layouts/Notifications/Modals'
import Toastr from '../../layouts/Notifications/Toastr'

// Plugins
import Calendar from '../../layouts/Plugins/Calendar'
import Spinners from '../../layouts/Plugins/Spinners'

// Tables
import DataTable from '../../layouts/Tables/DataTable'
import Tables from '../../layouts/Tables/Tables'

// UI Kits
import Invoice from '../../layouts/UI-Kits/Invoicing'
import Inbox from '../../layouts/UI-Kits/Email/Inbox'
import Message from '../../layouts/UI-Kits/Email/Message'
import Compose from '../../layouts/UI-Kits/Email/Compose'

interface IProp {
	changeLocale?(lang: string): void
}

interface IState {
	login: boolean
}

export default class Full extends PureComponent<IProp, IState> {
	constructor(props: any) {
		super(props)
		this.state = {
			login: Cookies.get('token') ? true : false,
		}
		this.logout = this.logout.bind(this)
	}

	logout() {
		Cookies.remove('token')
		this.setState({
			login: false,
		})
	}

	render() {
		const { changeLocale } = this.props

		if (!this.state.login) {
			return <Redirect to="/login" />
		}

		return (
			<div className="app">
				<Header logout={this.logout} changeLocale={changeLocale} />
				<div className="app-body">
					<Sidebar {...this.props} />
					<main className="main">
						<Breadcrumb />
						<Container fluid>
							<Switch>
								<Route path="/dashboard" name="Home" component={Home} />
								<Route path="/theme/colors" name="Colors" component={Colors} />
								<Route path="/theme/typography" name="Typography" component={Typography} />
								<Route path="/base/cards" name="Cards" component={Cards} />
								<Route path="/base/switches" name="Swithces" component={Switches} />
								<Route path="/base/tabs" name="Tabs" component={Tabs} />
								<Route path="/base/breadcrumbs" name="Breadcrumbs" component={Breadcrumbs} />
								<Route path="/base/carousels" name="Carousels" component={Carousels} />
								<Route path="/base/collapses" name="Collapses" component={Collapses} />
								<Route path="/base/dropdowns" name="Dropdowns" component={Dropdowns} />
								<Route path="/base/jumbotrons" name="Jumbotrons" component={Jumbotrons} />
								<Route path="/base/list-groups" name="ListGroups" component={ListGroups} />
								<Route path="/base/navbars" name="Navbars" component={Navbars} />
								<Route path="/base/navs" name="Navs" component={Navs} />
								<Route path="/base/paginations" name="Paginations" component={Paginations} />
								<Route path="/base/popovers" name="Popovers" component={Popovers} />
								<Route path="/base/progress-bar" name="ProgressBar" component={ProgressBar} />
								<Route path="/base/tooltips" name="Tooltips" component={Tooltips} />
								<Route path="/buttons/buttons" name="Buttons" component={Buttons} />
								<Route path="/buttons/button-dropdowns" name="ButtonDropdowns" component={ButtonDropdowns} />
								<Route path="/buttons/button-groups" name="ButtonGroups" component={ButtonGroups} />
								<Route path="/buttons/loading-buttons" name="LoadingButtons" component={LoadingButtons} />
								<Route path="/buttons/social-buttons" name="SocialButtons" component={SocialButtons} />
								<Route path="/charts" name="Charts" component={Charts} />
								<Route path="/editors/text-editors" name="TextEditors" component={TextEditors} />
								<Route path="/editors/code-editors" name="CodeEditors" component={CodeEditors} />
								<Route path="/forms/basic-forms" name="BasicForms" component={BasicForms} />
								<Route path="/forms/advanced-forms" name="AdvancedForms" component={AdvancedForms} />
								<Route path="/google-maps" name="GoogleMaps" component={GoogleMaps} />
								<Route path="/icons/font-awesome" name="FontAwesome" component={FontAwesome} />
								<Route path="/icons/simple-line-icons" name="SimpleLineIcons" component={SimpleLineIcons} />
								<Route path="/notifications/alerts" name="Alerts" component={Alerts} />
								<Route path="/notifications/badges" name="Badges" component={Badges} />
								<Route path="/notifications/modals" name="Modals" component={Modals} />
								<Route path="/notifications/toastr" name="Toastr" component={Toastr} />
								<Route path="/plugins/calendar" name="Calendar" component={Calendar} />
								<Route path="/plugins/spinners" name="LoadingButtons" component={Spinners} />
								<Route path="/tables/datatable" name="DataTable" component={DataTable} />
								<Route path="/tables/tables" name="Tables" component={Tables} />
								<Route path="/widgets" name="Widgets" component={Widgets} />
								<Route path="/ui-kits/invoicing/invoice" name="Invoice" component={Invoice} />
								<Route path="/ui-kits/email/inbox" name="Invoice" component={Inbox} />
								<Route path="/ui-kits/email/message" name="Message" component={Message} />
								<Route path="/ui-kits/email/compose" name="Compose" component={Compose} />
								<Redirect to="/dashboard" />
							</Switch>
						</Container>
					</main>
				</div>
			</div>
		)
	}
}
