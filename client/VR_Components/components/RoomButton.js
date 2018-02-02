import React from 'react';
import {Animated, Image, Text, View, VrButton} from 'react-vr';

export default class RoomButton extends React.Component {
    static defaultProps = {
        height:0.3,
    }

    constructor(props){
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){this.props.onClike()}

    render(){
        const PPM = this.props.pixelsPerMeter;
        return(
            <VrButton
                style = {{
                    flexDirection:'row',
                    layoutOrigin:[0.5,0.5],
                    position:'absolute',
                    transform:[
                        {translateX: this.props.translateX}
                    ]
                }}
                onClick = {() => {this.handleClick()}}>
                <Text
                    style = {{
                        backgroundColor:'rgba(0,0,0,0)',
                        color:'white',
                        fontSize:40 * this.props.factor,
                        fontWeight:"800",
                        padding: 0.1 * PPM,
                        textAlign:'center',
                        textAlignVertical:'auto',
                    }}>
                    {this.props.text}
                </Text>
            </VrButton>
        )
    }

}
