import React from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import VehicleDisplay from '../../components/VehicleDisplay/VehicleDisplay';

const Home = () => {
  return (
    <main className='container'>
      <Header/>
      <ExploreMenu/>
      <VehicleDisplay />
    </main>
  )
}

export default Home;