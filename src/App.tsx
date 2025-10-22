import React from 'react';
import { Banner } from './components/banner/banner';
import { NavigationMenuComponent } from './components/banner/nav';

function App() {
  return (
   <div className="pt-4 bg-slate-700">
     <NavigationMenuComponent />
     <Banner />
   </div>
  );
}

export default App;
