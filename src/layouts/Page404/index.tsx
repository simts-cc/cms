import React, { PureComponent } from 'react'
import { Container, Row, Col, Button, Input, InputGroup } from 'reactstrap'

class Page404 extends PureComponent {
	render() {
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="6">
							<div className="clearfix">
								<h1 className="float-left display-3 mr-4">404</h1>
								<h4 className="pt-3">Oops! You're lost.</h4>
								<p className="text-muted float-left">The page you are looking for was not found.</p>
							</div>
							<InputGroup className="input-prepend">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<i className="fa fa-search" />
									</span>
								</div>
								<Input type="text" placeholder="What are you looking for?" />
								<div className="input-group-append">
									<Button color="info">Search</Button>
								</div>
							</InputGroup>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Page404
