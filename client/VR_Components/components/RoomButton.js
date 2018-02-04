import React from 'react';
import {Animated, Image, Text, View, VrButton} from 'react-vr';

export default class RoomButton extends React.Component {


    constructor(props){
        super();
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            gazed: false
        }
    }

    handleClick(){this.props.onClike()}

    handleEnter(){
        this.setState({gazed:true})
    }

    handleExit(){
        this.setState({gazed:false})
    }

    render(){
        const PPM = this.props.pixelsPerMeter;
        const factor = this.props.factor;
        const Pactor = PPM * factor
        return(
            <VrButton
                style = {{
                    flexDirection:'row',
                    layoutOrigin:[0.5,0.5],
                    alignItems:'center',
                    position:'absolute',
                    transform:[
                        {translateX: this.props.translateX},
                        {translateY: this.props.translateZ}
                    ]
                }}
                onClick = {() => {this.handleClick()}}
                onEnter = {this.handleEnter.bind(this)}
                onExit = {this.handleExit.bind(this)}>
                <View
                    style = {{
                        alignItems:'center',
                        justifyContent: 'center',
                        backgroundColor:'rgba(0,0,0,0)',
                        
                    }}>
                    <Image
                        style = {{
                            height: 0.6 * Pactor,
                            width: 0.3 * Pactor,
                            transform: [
                                {translateY: 0.15 * Pactor}
                            ]
                        }}
                        source = {{uri:"../static_assets/icon.png"}}/>
                </View>
                { this.state.gazed &&
                <Text
                    style = {{
                        backgroundColor:'rgba(0,0,0,0)',
                        color:'white',
                        fontSize:30 * factor,
                        fontWeight:"800",
                        padding: 0.1 * Pactor ,
                        textAlign:'center',
                        textAlignVertical:'auto',
                        marginLeft: 0.8 * Pactor
                    }}>
                    {this.props.text}
                </Text>}

            </VrButton>
        )
    }

}
