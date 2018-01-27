import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
// //import buttons
// import RoomButton from './components/RoomButton';
// import FurniButton from './components/FurniButton';

import CylindricalPanel from 'CylindricalPanel';

const MAX_TEXTURE_WIDTH = 4096;
const MAX_TEXTURE_HEIGHT = 720;

//convert for rotation
const degreesToPixels = degree => (degrees / 360) * MAX_TEXTURE_WIDTH
//convert for movement
const PPM = 1/(2 * Math.PI * 3) * MAX_TEXTURE_WIDTH;

export default class Final_Project extends React.Component {
    static defaultProps = {
      tourSource: 'tourOfTheChester.json',
    };

    constructor(props) {
      super(props);
      this.state = {
        data: null,
        locationId: null,
        rotation: null,
      };
    }

// fetch data, should be changed into api call
    componentDidMount(){
        fetch(asset(this.props.tourSource).uri)
          .then(response => response.json())
          .then(responseData => {
            this.init(responseData);
          })
          .done();
    }

    init(data){
        this.setState({
            data:data,
            locationId:data.firstSpot,
            rotation:data.firstSpotRotation
        })

    }

    render(){
        if(!this.state.data){
            return null;
        }

        const locationId = this.state.locationId;
        const panoPhoto = this.state.data.photos[locationId];
        const surrounding = panoPhoto && panoPhoto.surrounding;
        const rotation = this.state.rotation;

        return(
            <View>
                <Pano source = {asset(panoPhoto.uri)} />
            </View>
        )
    }

};

AppRegistry.registerComponent('Final_Project', () => Final_Project);
