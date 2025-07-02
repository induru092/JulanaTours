import React from 'react';
import { Header } from '../../components/Header/Header.jsx';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';

export const Home = () => {
  return (
    <main className='container'>
      <Header />
      <ExploreMenu />
    </main>
  )
}

export default Home;