import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';
// //import buttons
 import RoomButton from './components/RoomButton';
// import FurniButton from './components/FurniButton';

import CylindricalPanel from 'CylindricalPanel';

const MAX_TEXTURE_WIDTH = 4096;
const MAX_TEXTURE_HEIGHT = 720;

//convert for rotation
const degreesToPixels = degrees => (degrees / 360) * MAX_TEXTURE_WIDTH
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
        const surroundings = (panoPhoto && panoPhoto.surroundings) || null;
        const rotation = this.state.rotation;

        return(
            <View>
                <Pano source = {asset(panoPhoto.uri)} />
                <CylindricalPanel
                    layer = {{
                        width: MAX_TEXTURE_WIDTH,
                        height: MAX_TEXTURE_HEIGHT,
                        density: MAX_TEXTURE_WIDTH,
                        radius: 3,
                    }}
                    style = {{position: 'absolute'}}>
                    <View
                        style = {{
                            alignItems:'center',
                            justifyContent:'center',
                            width:MAX_TEXTURE_WIDTH,
                            height:MAX_TEXTURE_HEIGHT,
                        }}>

                        <View>
                        {surroundings &&
                        surroundings.map((surrounding, index)=>{
                            return(
                                <RoomButton
                                    key = {surrounding.PhotoId}
                                    onClike = {()=>{
                                        this.setState({
                                            locationId:surrounding.PhotoId
                                        })
                                    }}
                                    pixelsPerMeter = {PPM}
                                    text = {surrounding.text}
                                    translateX = {degreesToPixels(surrounding.rotationY)}
                                />
                            )
                        })}
                        </View>

                    </View>
                </CylindricalPanel>
            </View>
        )
    }

};

AppRegistry.registerComponent('Final_Project', () => Final_Project);
