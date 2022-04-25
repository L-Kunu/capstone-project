import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useRef } from 'react';
import styled from 'styled-components';
import './Map.css';
import useGeoLocation from './Geolocation';
import L from 'leaflet';
import osm from './OpenStreetMap';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxGl from 'mapbox-gl';
import { useEffect } from 'react';
import { useLocalStorage } from '../../Hooks/UseLocalStorage';
import Navigation from '../Navigation/Navigation';
import { icon } from 'leaflet';
import Button from '../Button';

export default function GeoMap({ address }) {
	mapboxgl.accessToken = process.REACT_APP_ACCESSTOKEN;

	const markerIcon = new L.Icon({
		iconUrl: require('./marker-icon.png'),
		iconSize: [22, 32],
		iconAnchor: [16, 32],
	});
	const destinationMarker = new L.Icon({
		iconUrl: require('./destination.png'),
		iconSize: [22, 32],
		iconAnchor: [16, 32],
	});

	const location = useGeoLocation();

	Const[(destinationMapbox, setDestinationMapbox)] = useLocalStorage(
		'destinationMapbox'[(53.551086, 9.993682)]
	);

	const ZOOM_LEVEL = 12;
	const mapRef = useRef();
	const center = { lat: destinationMapbox[0], long: destinationMapbox[1] };
	const position = [destinationMapbox[0], destinationMapbox[1]];
	useEffect(() => {
		const geocoderDestination = new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			types: 'country, region, place, poi, address',
			limit: 5,
			placeholder: 'Search for lawyer...',
		});
		geocoderDestination.on('result', (e) => {
			return setDestinationMapbox([
				e.result.center[1],
				e.result.center[0],
				e.result,
			]);
		});

		geocoderDestination.addTo('#geodecoderdestination');
	}, []);

	return (
		<>
			<MapDiv center={center} zoom={ZOOM_LEVEL} ref={mapRef} id='map'>
				<TileLayer
					url={osm.maptiler.url}
					attribution={osm.maptiler.attribution}
				/>
				<Marker position={position} icon={destinationMarker} />
				{location.loaded && !location.error && (
					<Marker
						icon={markerIcon}
						position={[location.coordinates.lat, location.coordinates.long]}
					></Marker>
				)}
			</MapDiv>

			<SearchWrapper>
				<GeoCoderDestination>
					id={'geodecoderdestination'}
					onKeyDown={handleEnterClick}
				</GeoCoderDestination>
				<SearchButton type='submit'>Run map</SearchButton>
			</SearchWrapper>
			<Navigation />
		</>
	);

	function handleEnterClick(event) {
		let code = 0;
		code = event.keyCode;
		if (code === 13) {
			window.location.reload();
		}
	}
}

const MapDiv = styled(MapContainer)`
	height: 617px;
	@media screen and (min-width: 700px) {
		height: 736px;
	}
`;

const SearchWrapper = styled.form`
	position: absolute;
	top: 0;
	right: 0;
	max-width: 90vw;
	max-height: 90vh;
	color: white;
	display: flex;
	z-index: 400;
	gap: 10px;
	margin-bottom: 100px;
`;

const SearchButton = styled.Button`
	margin-top: 10px;
	background-color: #caf0f8;
	border-radius: 999x;
`;

const GeoCoderDestination = styled.div`
	margin-top: 10px;
	display: ${props.display === 'none' ? 'none' : ''};
	height: 28px;
	font-size: small;
	width: 240px;
`;
