import React from 'react';
import {Carousel} from 'react-materialize';
const CarouselListForm = (props) => (
  <Carousel options = {{fullWidth: true}}>
    props.children
  </Carousel>
)
export default CarouselListForm;
