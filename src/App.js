import React ,{useState} from 'react';
import ImageGrid from './comps/imageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import Uploadform from './comps/Uploadform';

function App() {
  const [selectedImg,setSelectedImg]=useState(null);
  return (
    <div className="App">
      <Title/>
      <Uploadform />
      <ImageGrid setSelectedImg={setSelectedImg}/>
   {selectedImg&& <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
