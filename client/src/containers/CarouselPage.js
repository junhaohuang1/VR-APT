import React from 'react'
import {Carousel} from 'react-materialize'
import axios from "axios";
import {carouselActions} from "../actions";
import CarouselListForm from "../components/CarouselListForm";
import CarouselImage from "../components/CarouselImage";


class CarouselPage extends React.Component {

  constructor(props, context) {
    super(props, context);


    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
      console.log(e.target.id)
      //open another website for different scene
      // switch (e.target.id){
      //     case '1':
      //         window.open('https://murmuring-hamlet-56587.herokuapp.com/home.html','_blank')
      //         break;
      //     case '2':
      //         window.open('https://radiant-caverns-54355.herokuapp.com/home.html','_blank')
      //         break;
      //     case '3':
      //         window.open('https://radiant-bayou-34137.herokuapp.com/home.html','_blank')
      //         break;
      //     case '4':
      //         window.open('https://blooming-badlands-89901.herokuapp.com/home.html','_blank')
      //         break;
      // }

      const data = {id: e.target.id}
      axios.put("/scene", data)
      //const current = window.location.href
      //window.location.href = '/vr/test'
      window.open('/vr/test','_blank')
  }


    componentWillMount(){
      this.props.getImages().
    }




    render(){
        return(
          {!this.props.images.length ? (
            <h1 className="text-center">No Pictures to Display</h1>
          ) : (
                <CarouselListForm>
                {this.props.images.map(image =>{
                  return(
                  <CarouselImage
                    key={image.id}
                    src={image.url}
                    onClick={this.props.onClick}
                    />
                  );
                  })}
                </CarouselImage>
              )
              />
            );
          }
          <CarouselListForm>
        )
     }
}

function mapStateToProps(state) {
  return {
    images: state.carousel.images
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getImages: () => {
      dispatch(carouselActions.getImages())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselPage)
