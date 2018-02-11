import React from 'react';
import {Animated, Image, Text, View, VrButton, NativeModules} from 'react-vr';

export default class FurniButton extends React.Component{
    constructor(props){
        super();
        this.state = {
            //check whether hove over
            gazed: 0
        }
    }

    handleEnter(){
        this.setState({gazed : 1})
    }

    handleExit(){
        this.setState({gazed : 0})
    }

    handleClick(){
        NativeModules.LinkingManager.openURL(this.props.uri)
    }

    render(){
        const PPM = this.props.pixelsPerMeter;
        const factor = this.props.factor;
        const Pactor = PPM * factor

        return(
            <VrButton
                style = {{
                    flexDirection:'column',
                    layoutOrigin:[0.5,0.5],
                    alignItems:'flex-start',
                    position: 'absolute',
                    transform:[
                        {translateX: this.props.translateX},
                        {translateY: this.props.translateZ}
                    ]
            }}
                onClick = {this.handleClick.bind(this)}
                onExit = {this.handleExit.bind(this)}>
                <View
                    style = {{
                        flexDirection:'column',
                        alignItems:'flex-start',
                        backgroundColor:'rgba(0,0,0,0.4)',
                        padding: 0.05 * PPM,
                        borderColor:"white",
                        borderWidth: 0.01 * PPM,
                        opacity:this.state.gazed
                    }}>
                    <Text
                    style = {{
                        backgroundColor:'rgba(0,0,0,0)',
                        color:'white',
                        fontSize:20,
                        fontWeight:"400",
                        textAlign:'center',
                        textAlignVertical:'auto',
                        opacity: 2
                    }}>
                        {this.props.title}
                    </Text>
                    <Text
                    style = {{
                        backgroundColor:'rgba(0,0,0,0)',
                        color:'white',
                        fontSize:16,
                        textAlign:'center',
                        textAlignVertical:'auto',
                        opacity:2
                    }}>
                        {this.props.text}
                    </Text>
                </View>
                <Image
                    style = {{
                        height: 0.3* PPM,
                        width: 0.3 * PPM,
                        marginTop:0.15 * PPM,

                    }}
                    source = {require("../static_assets/furniture.png")}
                    onEnter = {this.handleEnter.bind(this)}/>
            </VrButton>
        )}
}
