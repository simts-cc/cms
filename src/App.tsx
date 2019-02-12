import React, { PureComponent } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css'
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css'
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css'
// Import Main styles for this application
import './scss/style.scss'
// Temp fix for reactstrap
import './scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/'

// Layouts
import Login from './layouts/Login/'
import Page404 from './layouts/Page404/'
import Page500 from './layouts/Page500/'

// Languages
import { IntlProvider, addLocaleData, Locale } from 'react-intl'
import enUS from './intl/enUS'
import zhCN from './intl/zhCN'
import zhTW from './intl/zhTW'

interface ILang {
	[lang: string]: Locale
}

addLocaleData([enUS, zhCN, zhTW])

interface IState {
	locale: string
	messages: any
}

class App extends PureComponent<{}, IState> {
	private locales: any

	constructor(props: any) {
		super(props)

		this.locales = {
			enUS: enUS,
			zhCN: zhCN,
			zhTW: zhTW,
		}

		const locale = localStorage.getItem('locale') || enUS.locale

		this.state = {
			locale,
			messages: this.locales[locale].fields,
		}

		this.changeLocale = this.changeLocale.bind(this)
	}

	changeLocale(locale: string) {
		localStorage.setItem('locale', locale)
		this.setState({
			locale,
			messages: this.locales[locale].fields,
		})
	}

	render() {
		const { locale, messages } = this.state

		return (
			<IntlProvider locale={locale} messages={messages}>
				<HashRouter>
					<Switch>
						<Route exact path="/login" name="Login Page" render={(props: any) => <Login {...props} changeLocale={this.changeLocale} />} />
						<Route exact path="/404" name="Page 404" component={Page404} />
						<Route exact path="/500" name="Page 500" component={Page500} />
						<Route path="/" name="Home" render={(props: any) => <Full {...props} changeLocale={this.changeLocale} />} />
					</Switch>
				</HashRouter>
			</IntlProvider>
		)
	}
}

export default App
