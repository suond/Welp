import React from 'react'


class GoogleMapDisplay extends React.Component {

    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435},
            zoom: 12
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions)
        new google.maps.Marker({
            position: {lat: 37.7758, lng: -122.435},
            map: this.map
        });
    }

    render() {
        return (
            <div id="mapContainer" ref={map => this.mapNode = map}>

            </div>
        )
    }

}


export default GoogleMapDisplay