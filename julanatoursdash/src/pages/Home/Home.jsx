import React, { useState } from 'react';
import { Header } from '../../components/Header/Header.jsx';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import VehicleDisply from '../../components/VehicleDisplay/VehicleDisplay.jsx';

export const Home = () => {
  const [category, setCategory] = useState('All');
  return (
    <main className='container'>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <VehicleDisply Category={category} searchText={''}/>
    </main>
  )
}

export default Home;