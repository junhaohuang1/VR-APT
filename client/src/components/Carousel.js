import React from 'react'
import {Carousel} from 'react-materialize'

export default () => {
   return(
   <Carousel
	fixedItem={<button className='btn'>Launch</button>}
	options={{ fullWidth: true }}
	images={[
		'https://i.ytimg.com/vi/Rd3cG0-5qWY/maxresdefault.jpg',
		'https://upload.wikimedia.org/wikipedia/commons/b/bf/St_Patrick%27s_Cathedral_Choir_360x180%2C_Dublin%2C_Ireland.jpg',
		'http://www.freegreatpicture.com/files/36/7768-degree-seamless-panoramic.jpg',
	]}
>
</Carousel>
   )
}
