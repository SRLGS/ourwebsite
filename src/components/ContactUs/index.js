import {Component} from "react"

import {v4} from "uuid"

import "./index.css"


const Services=[{
    id:v4(),name:"Mendix"
},{id:v4(),
    name:"Conventional Development"
},{
    id:v4(),
    name:"SalesForce"}
    ,{
        id:v4(),
        name:"Polarion"
    }]

class ContactUs extends Component{
    state={name:"",email:"",message:"",errorMsg:"", condition:false,
    services:Services[0],
     phoneNumber:"",whatsAppNumber:"",className:""}

    namechange=event=>{
        this.setState({name:event.target.value})
    }

    emailchange=event=>{
        this.setState({email:event.target.value})
    }

    phonechange=event=>{
        this.setState({phoneNumber:event.target.value})
    }

messagechange=event=>{
    this.setState({message:event.target.value})
}

whatsappchange=event=>{
    this.setState({whatsAppNumber:event.target.value})
}

onServiceChange=event=>{
    this.setState({services:event.target.value})
}

submitted=event=>{
    event.preventDefault()
    
    const formData=this.state

    console.log(formData)


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
            this.setState({name:"",email:"", message:"",errorMsg:"Thank you for registering. We will get back to you soon.", phoneNumber:"",whatsappNumber:""})
        }
         else {
            this.setState({ condition:true,name:"",email:"",message:"", className:"text-danger",errorMsg:"User with this email already exists or you have entered wrong information", phoneNumber:"",whatsappNumber:""})
        }
      })
      .catch((error) => {

        this.setState({ condition:true,name:"",email:"",className:"text-danger",message:"",errorMsg:"Registration failed. Please try again later.", phoneNumber:"",whatsAppNumber:""})

      });
}

    render(){
        const{name,condition,className,email,message,errorMsg,
            phoneNumber,whatsAppNumber,services}=this.state
    return(<div className="totalContactUsContainer" >

        <div className="contactUsContainer">

            <div className="detailsContainer shadow order-1 order-lg-0">
                <form className="formContainer p-3" onSubmit={this.submitted}>
                <h1 className="text-center text-danger">C O N T A C T U S</h1>

                <label htmlFor="name" className="mt-3">Fullname</label>
                <input value={name} type="text" onChange={this.namechange} placeholder="Enter Your Fullname" className="smallInput" id="name"/>

                <label htmlFor="email" className="mt-3">Email</label>
                <input type="text" value={email} onChange={this.emailchange} placeholder="Enter Your Email" className="smallInput" id="email"/>

                <label htmlFor="phone" className="mt-3">PhoneNumber</label>
                <input type="text" value={phoneNumber} onChange={this.phonechange} placeholder="Enter Your PhoneNumber" className="smallInput" id="phone"/>

                <label htmlFor="whatsAppNumber" className="mt-3">WhatsAppNumber</label>
                <input type="text" value={whatsAppNumber} onChange={this.whatsappchange} placeholder="Enter Your WhatsAppNumber" className="smallInput" id="whatsAppNumber"/>
            
                <label className="mt-3">Services</label>
                <select className="smallInput  p-2" value={services} onChange={this.onServiceChange}>
               {Services.map((each)=>(<option key={each.id} value={each.name}>{each.name}</option>))}
               </select>


                <label htmlFor="message" className="mt-3">Message</label>
                <textarea rows="5" cols="50" id="message" type="text" value={message}  placeholder="Type Your Message" onChange={this.messagechange}/>

                <button   className=" mt-3 contactbutton btn btn-danger" type="submit">Submit</button>
                {condition&& <p className={className}>{errorMsg}</p>}
                </form>
            </div>

            <div className="aboutUsContainer p-3 order-0 order-lg-1" >
                <h1 className="text-left contactfind">F I N D US</h1>
                <p className="text-left contactPara">Launched in 2004, the World-Wide Labyrinth Locator has been designed to be an easy-to-use database of labyrinths around the world. Information about labyrinths you can visit, including their locations, pictures, and contact details, are accessible here, along with information about the many types of labyrinths found worldwide. Labyrinths occur in many forms, shapes, and sizes, and the Locator contains both historic and modern examples. At the current time the Worldwide Labyrinth Locator database contains more than 6250 labyrinths (including a few mazes) in more than 90 different countries around the world.</p>
        <a href=" https://goo.gl/maps/AB4kAJK1xedFZLmu6" target="_blank">  <button type="button" className="btn btn-danger">Find Locations <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button></a>
            </div>
        </div>
    </div>)
    }
}

export default ContactUs