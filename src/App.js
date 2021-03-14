import React from 'react';
import Card from './components/Card'
import Card1 from './Components1/Card1';
import Drawer from './Components1/Drawer'
import MaterialCard from './Components1/MaterialCard'
function App() {
  return (
    <>
    {/* <div style={{"margin":"0","display": "flex","alignItems":'center',"padding":'0'}}>
      
      <Card1/>
    </div> */}
    <Drawer/>
    <MaterialCard/>
    </>
  );
}

export default App;
