import React, { PureComponent } from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { injectIntl, InjectedIntlProps } from 'react-intl'

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import data from './_data'

class DataTable extends PureComponent<InjectedIntlProps> {
	private table: Object[]
	private options: Object

	constructor(props: any) {
		super(props)

		this.table = data.rows
		this.options = {
			sortIndicator: true,
			hideSizePerPage: true,
			paginationSize: 3,
			hidePageListOnlyOnePage: true,
			clearSearch: true,
			alwaysShowAllBtns: false,
			withFirstAndLast: false,
		}
	}

	render() {
		const { intl } = this.props

		return (
			<div className="animated">
				<Card>
					<CardHeader>
						<i className="icon-menu" />
						{intl.formatMessage({ id: 'DataTable' })}
						<div className="card-actions">
							<a href="https://github.com/AllenFang/react-bootstrap-table">
								<small className="text-muted">docs</small>
							</a>
						</div>
					</CardHeader>
					<CardBody>
						<BootstrapTable data={this.table} version="4" striped hover pagination search options={this.options}>
							<TableHeaderColumn dataField="name" dataSort>
								Name
							</TableHeaderColumn>
							<TableHeaderColumn isKey dataField="email">
								Email
							</TableHeaderColumn>
							<TableHeaderColumn dataField="age" dataSort>
								Age
							</TableHeaderColumn>
							<TableHeaderColumn dataField="city" dataSort>
								City
							</TableHeaderColumn>
						</BootstrapTable>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default injectIntl(DataTable)
