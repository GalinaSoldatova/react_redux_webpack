import React from 'react';

const Home = () => (
  <div className='wrapper'>
    <h1>Главная страница</h1>
    <div className='home-page'>
      <p>Здесь должен быть какой-то контент</p>
      <p>Но пока будет просто виджет</p>
      <div>
        <iframe width="900" height="500" src="https://www.youtube.com/embed/GcRKREorGSc?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      </div>
    </div>
  </div>
);

export default Home;
