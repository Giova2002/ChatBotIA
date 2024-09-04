import React from 'react';

import './Home.css'
import Navbar from '../Components/Navbar/Navbar'
import BarText from '../Components/BarText/BarTex'
import Welcome from '../Components/ChatMessage/Welcome';
import img from '../assets/image/chat.png'

function Home() {
    return (
        <div className='gray_box'>
            <div className='square'>
                <Navbar/>
                {/* <Welcome/> */}
                <BarText/>
            </div>
        </div>

    ) 
  }

  export default Home;


