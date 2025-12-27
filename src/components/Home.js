import React from 'react';
import './Home.css';
import styles from './sectionCard.module.css';

import image1 from '../Images/generated-image.png';

function Home() {
  return (
    <section id="Home" className={`${styles.general} container-fluid`}>
        <div class="home">
          <div class="hero-section row ">
            <div class="col-sm-6 order-2 order-sm-1 justify-content-md-end justify-content-center binding"> 
                <div class="intro">
                  <div class="first-line">Hello, I'm <br/>
                    <span class="name">Rakshit  <br/> Ranpariya.</span> 
                  </div>
                  <div class="sub-line">A passionate Software Developer <br/> who loves building Effecient Solutions.</div>
                  <button class= "custom-button">View My Work</button>
                </div>
            </div>
            <div class="col-sm-6 order-1 order-sm-2 profile-image ">
              <img class="image" src={image1} alt="Profile" />
            </div>
          
          </div>
        </div>
    </section>
  );
}

export default Home;
