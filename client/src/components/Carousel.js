import React from 'react'
import {Carousel, Button} from 'react-materialize'
import axios from "axios";

const styles = {
    button:{
        "position":"absolute",
        "right": "50%",
        "top": "80%"
    },
    img:{
        "position": "relative"
    }
}

export default class CarouselPage extends React.Component {

    handleClick = (e) => {
        console.log(e.target.id)
        axios.put("/scene", e.target.id)
    }
    render(){
        return(

            <Carousel options = {{fullWidth: true}}>
                <div className = "caroImg" style = {styles.img}>
                    <img src = "https://i.ytimg.com/vi/Rd3cG0-5qWY/maxresdefault.jpg" />
                    <button className='btn' id = "1" onClick ={this.handleClick} style = {styles.button}>Launch</button>
                </div>
                <div className = "caroImg" style = {styles.img}>
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/b/bf/St_Patrick%27s_Cathedral_Choir_360x180%2C_Dublin%2C_Ireland.jpg" style = {styles.img}/>
                    <button className='btn' id = "2" onClick ={this.handleClick} style = {styles.button}>Launch</button>
                </div>
                <div className = "caroImg" style = {styles.img}>
                    <img src = "http://scion-social.com/blog/wp-content/uploads/2016/07/360-panorama-matador-seo.jpg" style = {styles.img}/>
                    <button className='btn' id = "3" onClick ={this.handleClick} style = {styles.button} >Launch</button>
                </div>
                <div className = "caroImg" style = {styles.img}>
                    <img src = "https://upload.wikimedia.org/wikipedia/commons/b/bf/St_Patrick%27s_Cathedral_Choir_360x180%2C_Dublin%2C_Ireland.jpg"style = {styles.img}  />
                    <button className='btn' id = "4" onClick ={this.handleClick} style = {styles.button}>Launch</button>
                </div>
            </Carousel>


        )
     }
}
