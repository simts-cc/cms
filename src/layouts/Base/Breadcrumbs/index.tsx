import React, { PureComponent } from 'react'
import { Row, Col, Card, CardHeader, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap'

class Breadcrumbs extends PureComponent {
	render() {
		return (
			<div className="animated fadeIn">
				<Row>
					<Col xs="12">
						<Card>
							<CardHeader>
								<i className="fa fa-align-justify" />
								<strong>Breadcrumbs</strong>
								<div className="card-actions">
									<a href="https://reactstrap.github.io/components/breadcrumbs/" target="_blank" rel="noopener noreferrer">
										<small className="text-muted">docs</small>
									</a>
								</div>
							</CardHeader>
							<CardBody>
								<Breadcrumb>
									<BreadcrumbItem active>Home</BreadcrumbItem>
								</Breadcrumb>
								<Breadcrumb>
									<BreadcrumbItem>
										<a>Home</a>
									</BreadcrumbItem>
									<BreadcrumbItem active>Library</BreadcrumbItem>
								</Breadcrumb>
								<Breadcrumb>
									<BreadcrumbItem>
										<a>Home</a>
									</BreadcrumbItem>
									<BreadcrumbItem>
										<a>Library</a>
									</BreadcrumbItem>
									<BreadcrumbItem active>Data</BreadcrumbItem>
								</Breadcrumb>
								<Breadcrumb tag="nav">
									<BreadcrumbItem tag="a">Home</BreadcrumbItem>
									<BreadcrumbItem tag="a">Library</BreadcrumbItem>
									<BreadcrumbItem tag="a">Data</BreadcrumbItem>
									<BreadcrumbItem active tag="span">
										Bootstrap
									</BreadcrumbItem>
								</Breadcrumb>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Breadcrumbs
