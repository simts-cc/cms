import React, { PureComponent } from 'react'
import { Card, CardHeader, CardBody, NavLink } from 'reactstrap'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { injectIntl, InjectedIntlProps } from 'react-intl'

const defaultZoom = 11
const defaultCenter = { lat: 24.2198468, lng: 120.6756879 }
var locations: Object[]

interface IMarkerList {
	locations: any
}

class MarkerList extends PureComponent<IMarkerList> {
	render() {
		return locations.map((location, index) => {
			return <MarkerWithInfoWindow key={index.toString()} location={location} />
		})
	}
}

interface IProp {
	key: string
	location: any
}

interface IState {
	isOpen: boolean
}

class MarkerWithInfoWindow extends PureComponent<IProp, IState> {
	constructor(props: any) {
		super(props)
		this.state = {
			isOpen: false,
		}
		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		})
	}
	render() {
		const { location } = this.props

		return (
			<Marker onClick={this.toggle} position={location} title={location.title} label={location.label}>
				{this.state.isOpen && (
					<InfoWindow onCloseClick={this.toggle}>
						<NavLink href={location.www} target="_blank" rel="noopener noreferrer">
							{location.title}
						</NavLink>
					</InfoWindow>
				)}
			</Marker>
		)
	}
}

const GoogleMapsComponent = withScriptjs(
	withGoogleMap(props => {
		return (
			<GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
				{<MarkerList locations={locations} />}
			</GoogleMap>
		)
	})
)

class ReactGoogleMaps extends PureComponent<InjectedIntlProps> {
	componentWillMount() {
		const { intl } = this.props

		locations = [
			{
				lat: 24.1845583,
				lng: 120.6087352,
				label: 'X',
				draggable: false,
				title: intl.formatMessage({ id: 'DistrictXitun' }),
				www: 'https://www.xitun.taichung.gov.tw/',
			},
			{
				lat: 24.1401931,
				lng: 120.597207,
				label: 'N',
				draggable: false,
				title: intl.formatMessage({ id: 'DistrictNantun' }),
				www: 'https://www.nantun.taichung.gov.tw/',
			},
		]
	}

	// To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app

	render() {
		const { intl } = this.props

		return (
			<div className="animated fadeIn">
				<Card>
					<CardHeader>
						<i className="icon-map" />
						{intl.formatMessage({ id: 'GoogleMaps' })}
						<div className="card-actions">
							<a href="https://github.com/tomchentw/react-google-maps" target="_blank" rel="noopener noreferrer">
								docs
							</a>
						</div>
					</CardHeader>
					<CardBody>
						<GoogleMapsComponent
							key="map"
							googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC4PY3fV5pFqDGk7gIU3TfLXzdKTmi55eg"
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={<div style={{ height: `400px` }} />}
							mapElement={<div style={{ height: `100%` }} />}
						/>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default injectIntl(ReactGoogleMaps)
