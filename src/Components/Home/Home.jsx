import React from 'react';
import './Home.css';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import Main from '../Main/Main';
import RightSidebar from '../RightSidebar/RightSidebar';

const Home = () => {
  return (
    <div className='flex'>
      <LeftSidebar />
      <Main />
      <RightSidebar />
      
      
    </div>
  )
}

export default Home
