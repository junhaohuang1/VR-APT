import React from 'react'
import {Card,CardTitle} from 'react-materialize'
import 'materialize-css'

<<<<<<< HEAD

// const hello = () => {
// 	console.log('hello',this)
// }

export default class Cards extends React.Component{
	render(){
		return (
			<div>
<Card 
	header={<CardTitle image='https://i.ytimg.com/vi/Rd3cG0-5qWY/maxresdefault.jpg'>Card Title</CardTitle>}
	actions={[<a href='asdf'>This is a Link</a>]}>
	I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card>

<Card 
	header={<CardTitle image='https://upload.wikimedia.org/wikipedia/commons/b/bf/St_Patrick%27s_Cathedral_Choir_360x180%2C_Dublin%2C_Ireland.jpg'>Card Title</CardTitle>}
	actions={[<a href='asdf'>This is a Link</a>]}>
	I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card>

<Card 
	header={<CardTitle image='http://scion-social.com/blog/wp-content/uploads/2016/07/360-panorama-matador-seo.jpg'>Card Title</CardTitle>}
	actions={[<a href='asdf'>This is a Link</a>]}>
	I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card>
</div>)
	}}
=======
export default () => {
   return(
   <Carousel
	fixedItem={<button className='btn'>Launch</button>}
	options={{ fullWidth: true }}
	images={[
		'https://i.ytimg.com/vi/Rd3cG0-5qWY/maxresdefault.jpg',
		'https://upload.wikimedia.org/wikipedia/commons/b/bf/St_Patrick%27s_Cathedral_Choir_360x180%2C_Dublin%2C_Ireland.jpg',
		'http://scion-social.com/blog/wp-content/uploads/2016/07/360-panorama-matador-seo.jpg',
	]}
>
</Carousel>
   )
}
>>>>>>> 187ddef6204b3a66884472c0e4934be8926dbe68
