import React from 'react';
import {
  AppRegistry,
  asset,
  Text,
  View,
  StyleSheet,
} from 'react-vr';

export default class InputBox extends React.Component{
    constructor (){
        super();
        //set state for input
        this.state = {
            textColor:'white',
            inputText: 'input here',
        }
    }
    // handles the correct input
    handleInput(e){
        let event = e.nativeEvent.inputEvent;

        if(event.eventType === "keyup"){
            //check for special input keys like delete, space
            //check back space for delete
            if(event.key === "Backspace"){
                let newString = this.state.inputText;
                //get rid of the spaces in the bottom
                while(newString.slice(-1) === " "){
                    newString = newString.slice(0,-1)
                }

                this.setState({inputText: newString.slice(0,-1)})
            }else if (event.key === "Shift"){
                console.log("shift")
            }else{
                // normal situation, either start conversation or continue
                switch(this.state.inputText){
                    case "input here":
                        this.setState({inputText: event.key})
                        break;
                    default:
                        this.setState({inputText:this.state.inputText + event.key})
                }
            }
        }
    }

    render(){
        return(
            <View style = {[styles.container, {transform:[{tranlate:[-3,0,0]}]}]}
                  onInput = {this.handleInput.bind(this)}>
                <Text style = {styles.texts}>
                    {this.state.inputText}
                </Text>
            </View>
        )
    }

    //set up styles
    var styles = StyleSheet.create({
        container: {
            height:4,
            width:2,
            padding:0.06,
            backgroundColor: "black",
            opacity:0.8,
            borderColor:"white",
            borderRadius:0.1,
            borderWidth:0.01,
            layoutOrigin: [0.5, 0.5]
        },
        texts: {
            opacity:10
        }
    });
}
