import React from 'react'
import Common from './Common'
import dev from '../src/img/banner2.svg';

const About =() =>{
  return (<> 
  <Common
    name="Welcome to about us page"
    imgsrc={dev}
    visit="/contact"
    btnName="Contact Now"
  />
  </>)
}

export default About;