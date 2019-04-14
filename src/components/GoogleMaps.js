import React from 'react'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends React.Component {
        static defaultProps = {
            center: {
                    lat: 59.95,
                    lng: 30.33
                },
            zoom: 11
        };
        getMapOptions = (maps) => {

            return {
                streetViewControl: true,
                scaleControl: true,
                fullscreenControl: false,
                styles: [{
                    featureType: "poi.business",
                    elementType: "labels",
                    stylers: [{
                        visibility: "true"
                    }]
                }],
                gestureHandling: "greedy",
                disableDoubleClickZoom: true,
                minZoom: 8,
                maxZoom: 18,
        
                mapTypeControl: true,
                mapTypeId: maps.MapTypeId.ROADMAP,
                mapTypeControlOptions: {
                    style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: maps.ControlPosition.BOTTOM_CENTER,
                    mapTypeIds: [
                        maps.MapTypeId.ROADMAP,
                        maps.MapTypeId.SATELLITE,
                        maps.MapTypeId.HYBRID,
                        maps.MapTypeId.TERRAIN
                    ]
                },
        
                zoomControl: true,
                clickableIcons: true
            };
        }
        render() {
            return (
                <div className="container-fluid">
                    <div className="d-flex align-items-stretch">
                        <main id="main" role="main">
                            <h1>Google Maps</h1>
                            <div className="col-sm-12 mx-auto mt-4 pt-3 mb-4 pb-2">
                                <div style={{ height: '100vh', width: '100%' }}>
                                    <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyA6xeoO-9QgnzyB91h5XOWJ-l79eX3ULxU" }}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}
                                    options={this.getMapOptions}
                                    marker={{}}
                                    >
                                    </GoogleMapReact>
                                </div>
                            </div>
                            <Link id="return-to-top" to="#" className="btn-info btn-lg back-to-top" role="button" title="Back to top"><i
                                    className="fas fa-angle-up fa-2x"></i></Link>
                        </main>
                    </div>
                </div>
            )
        }
}
export default GoogleMaps