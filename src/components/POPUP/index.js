/*import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function POPUP() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Welcome to Our Website!</h2>
        <p>This is a popup that appears when the website is opened.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default POPUP;*/ 




// Popup.js
import {Component } from 'react';
import './index.css';



import { RxCross2 } from "react-icons/rx";





class POPUP extends Component {


 state={isOpen:false,name:"",email:"",errorMsg:"", condition:false
 ,whatsAppNumber:"",className:""}

 componentDidMount(){
   this.id=setTimeout(()=>{
    console.log("this")
    this.setState({isOpen:true})
    
  },3000)
 }

 componentWillUnmount(){
  clearTimeout(this.id)
 }


  submit=(event)=>{

    event.preventDefault()
    
    const formData=this.state

    console.log(formData)

//I want changed URL
    fetch('http://localhost:3005/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
            this.setState({condition:true,className:"text-success"})
            this.setState({name:"",email:"",errorMsg:"Thank you for registering. We will get back to you soon.",whatsappNumber:""})
        }
         else {
            this.setState({ condition:true,name:"",email:"", className:"text-danger",errorMsg:"User with this email already exists or you have entered wrong information",whatsappNumber:""})
        }
      })
      .catch((error) => {

        this.setState({ condition:true,name:"",email:"",className:"text-danger",errorMsg:"Registration failed. Please try again later.",whatsAppNumber:""})

      });

  }


  

  namechange=event=>{
    this.setState({name:event.target.value})
}

emailchange=event=>{
    this.setState({email:event.target.value})
}



whatsappchange=event=>{
this.setState({whatsAppNumber:event.target.value})
}




   closePopup = () => {
   this.setState({isOpen:false})
  };

  renderPopUpCode=()=>{
    const{name,email,whatsAppNumber,condition,className,errorMsg}=this.state

    return( <div className="popupContainer">
  <div className="popupContent">
        <form className="formContainer p-2 order-0 order-md-0" onSubmit={this.submit}>

        <label htmlFor="name" className="mt-3">Fullname</label>
        <input value={name} type="text" onChange={this.namechange} placeholder="Enter Your Fullname" className="smallInput" id="name"/>

        <label htmlFor="email" className="mt-3">Email</label>
        <input type="text" value={email} onChange={this.emailchange} placeholder="Enter Your Email" className="smallInput" id="email" />

        <label htmlFor="whatsAppNumber" className="mt-3">WhatsAppNumber</label>
        <input type="text" value={whatsAppNumber} onChange={this.whatsappchange} placeholder="Enter Your WhatsAppNumber" className="smallInput" id="whatsAppNumber"/>

        <button   className=" mt-3 contactbutton btn btn-danger" type="submit">Submit</button>
        {condition&& <p className={className}>{errorMsg}</p>}
        </form>
    <div className="popupImageContainer order-1 order-md-1" > 
    <div className="popupIconCotainer" onClick={this.closePopup}>
    <RxCross2 size="20"height="20" color="black" className="popupIcon"/>
  </div>

    </div>
    </div>
</div>
)
  }

  render(){
    const{isOpen}=this.state
    return isOpen && this.renderPopUpCode()
  }
};

export default POPUP;

