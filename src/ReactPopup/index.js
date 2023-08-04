import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const overlayStyles={
  backgroundColor:"green",
  color:"gold"
}

const ReactPopup = () => (
 <div className="popup-container bg-primary">
   <Popup
   position="top right"
   overlayStyle={overlayStyles}
     trigger={
       <button type="button" className="trigger-button">
         Trigger
       </button>
     }
   >
     <p>React is a popular and widely used programming language</p>
   </Popup>   
 </div>
)
export default ReactPopup