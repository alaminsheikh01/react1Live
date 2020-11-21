import React from 'react'
import { NavLink } from 'react-router-dom';
import Common from './Common'
import dev from '../src/img/banner2.svg';

const Home =() =>{
  return (<>
  <Common
  name="Grow your business with"
  imgsrc={dev}
  visit="/service"
  btnName="Get started"
  />
   </>
)
}

export default Home;