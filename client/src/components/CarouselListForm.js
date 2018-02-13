import React from 'react';
const CarouselListForm = (props) => (
  <Carousel options = {{fullWidth: true}}>
    props.children
  </Carousel>
)
export default CarouselListForm;
