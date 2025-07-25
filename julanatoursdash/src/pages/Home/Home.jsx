// import React, { useState } from 'react';
// import { Header } from '../../components/Header/Header.jsx';
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
// import VehicleDisply from '../../components/VehicleDisplay/VehicleDisplay.jsx';
// import Footer from '../../components/Footer/Footer.jsx';
// import Menubar from '../../components/Menubar/Menubar.jsx';
// import Status from '../Status/Status.jsx';

// export const Home = () => {
//   const [category, setCategory] = useState('All');
//   return (
//     <main className='container'>
//       <Header />
//       <ExploreMenu category={category} setCategory={setCategory} />
//       <VehicleDisply Category={category} searchText={''}/>
//       <Status />
//       <Footer />
//     </main>
    
//   )
// }

// export default Home;
import React, { useState } from 'react';
import { Header } from '../../components/Header/Header.jsx';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import VehicleDisplay from '../../components/VehicleDisplay/VehicleDisplay.jsx'; // Fixed typo
import Footer from '../../components/Footer/Footer.jsx';
import Menubar from '../../components/Menubar/Menubar.jsx';
import Status from '../Status/Status.jsx';

export const Home = () => {
  const [category, setCategory] = useState('All');
  
  return (
    <div className="app-container"> {/* Added wrapper div */}
      
      <main className='container'>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <VehicleDisplay Category={category} searchText={''} /> {/* Fixed component name */}
        <Status />
      </main>
      <Footer />
    </div>
  );
}

export default Home;