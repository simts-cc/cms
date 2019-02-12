import React, { PureComponent } from 'react'
import { Route, Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { injectIntl, InjectedIntlProps } from 'react-intl'
import routes from '../../routes'

const findRouteName = (url: string): string => routes[url]

const getPaths = (pathname: string) => {
	const paths = ['/']

	if (pathname === '/') return paths

	pathname.split('/').reduce((prev, curr, index) => {
		const currPath = `${prev}/${curr}`
		paths.push(currPath)
		return currPath
	})
	return paths
}

interface IProp extends InjectedIntlProps {
	match: any
}

class BreadcrumbsItem extends PureComponent<IProp> {
	render() {
		const { match, intl } = this.props
		let routeName = findRouteName(match.url)
		if (routeName) {
			routeName = intl.formatMessage({ id: routeName })
			return match.isExact || !match.url ? (
				<BreadcrumbItem active>{routeName}</BreadcrumbItem>
			) : (
				<BreadcrumbItem>
					<Link to={match.url || ''}>{routeName}</Link>
				</BreadcrumbItem>
			)
		}
		return null
	}
}

const BreadcrumbRoute = (props: any) => {
	const paths = getPaths(props.location.pathname)
	const items = paths.map((path: string, i: number) => <Route key={i} path={path} component={injectIntl(BreadcrumbsItem)} />)
	return <Breadcrumb>{items}</Breadcrumb>
}

const Breadcrumbs = (props: any) => (
	<div>
		<Route path="/:path" component={BreadcrumbRoute} {...props} />
	</div>
)

export default Breadcrumbs
