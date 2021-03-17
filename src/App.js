import {useRef, useEffect} from 'react'
import Sortable from 'sortablejs'
// import logo from './logo.svg';
import './App.css';

import dragImage1 from './images/drag-image-1.jpg'
import dragImage2 from './images/drag-image-2.jpg'
import dragImage3 from './images/drag-image-3.jpg'
import dragImage4 from './images/drag-image-4.jpg'
import dragImage5 from './images/drag-image-5.jpg'

import UserCard from './components/UserCard'


function App() {
  const dropArea = useRef(null)
  // console.log(cardContainer)

  useEffect(() => {
    new Sortable(dropArea.current, {
        animation: 350,
        ghostClass:'blue-background-class',
        chosenClass: 'sortable-chosen',
        dragClass:'sortable-drag'
    });

    return () => {
      
    }
  })
  
  return (
    <div  className="drop-container">
      <div ref={dropArea} className="drop-area">
        <UserCard name="Ayo" profilePic={dragImage1} role="Web developer" />
        <UserCard name="Dele" profilePic={dragImage2} role="Fashion Designer" />
        <UserCard name="Dave" profilePic={dragImage3} role="Digital Marketer" />
        <UserCard name="Ola" profilePic={dragImage4} role="Stylist" />
        <UserCard name="Yinka" profilePic={dragImage5} role="Art director" />
      </div>
    </div>
  );
}

export default App;
