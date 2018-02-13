import React from 'react'

const styles = {
    button:{
        "position":"absolute",
        "right": "45%",
        "top": "50%"
    },
    img:{
        "position": "relative",
        "height": "auto"
    }
}


const CarouselImage = (props) => {
  <div className = "caroImg" style = {styles.img}>
      <img src = {props.src} />
      <button className='btn' id = "1" onClick ={props.handleClick} style = {styles.button}>Launch</button>
  </div>


}
