import React from 'react';
import { Header } from '../../components/Header/Header.jsx';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import VehicleDisply from '../../components/VehicleDisplay/VehicleDisply.jsx';

export const Home = () => {
  return (
    <main className='container'>
      <Header />
      <ExploreMenu />
      <VehicleDisply/>
    </main>
  )
}

export default Home;