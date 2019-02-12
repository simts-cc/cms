import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup } from 'reactstrap'
import { injectIntl, InjectedIntlProps } from 'react-intl'
import Cookies from 'js-cookie'

interface IProp extends InjectedIntlProps {
	changeLocale(locale: string): void
}

interface IState {
	login: boolean
	locale: string | null
}

class Login extends PureComponent<IProp, IState> {
	constructor(props: any) {
		super(props)

		this.state = {
			locale: localStorage.getItem('locale'),
			login: Cookies.get('token') ? true : false,
		}
	}

	login(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		Cookies.set('token', 'token')
		this.setState({
			login: true,
		})
	}

	render() {
		const { intl, changeLocale } = this.props
		const { login } = this.state
		if (login) {
			return <Redirect to="/" />
		}
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="5">
							<CardGroup className="mb-4">
								<Card className="p-4">
									<CardBody>
										<form onSubmit={e => this.login(e)}>
											<InputGroup className="mb-3">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="icon-user" />
													</span>
												</div>
												<Input type="text" placeholder={intl.formatMessage({ id: 'Username' })} autoFocus />
											</InputGroup>
											<InputGroup className="mb-4">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="icon-lock" />
													</span>
												</div>
												<Input type="password" placeholder={intl.formatMessage({ id: 'Password' })} />
											</InputGroup>
											<Row>
												<Col className="text-right">
													<i
														className="flag-icon flag-icon-us h2"
														style={{ marginRight: 2, cursor: 'pointer' }}
														onClick={() => changeLocale('enUS')}
													/>
													<i
														className="flag-icon flag-icon-cn h2"
														style={{ marginRight: 2, cursor: 'pointer' }}
														onClick={() => changeLocale('zhCN')}
													/>
													<i
														className="flag-icon flag-icon-tw h2"
														style={{ marginRight: 2, cursor: 'pointer' }}
														onClick={() => changeLocale('zhTW')}
													/>
												</Col>
											</Row>
											<Row>
												<Col className="text-right">
													<Button color="primary" className="px-4">
														{intl.formatMessage({ id: 'LogIn' })}
													</Button>
												</Col>
											</Row>
										</form>
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default injectIntl(Login)
