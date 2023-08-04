import {Link} from "react-router-dom"

import POPUP from "../POPUP"

import "./index.css"

const Header=()=>(
  <>
  <POPUP/>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark userNavbar">

  <a className="navbar-brand" href="navbar"><img alt="headerImage" className="headerImage" src="https://res.cloudinary.com/dkajxnnlq/image/upload/v1689764804/download_jlbxxy.jpg"/></a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

    <span className="navbar-toggler-icon"></span>

  </button>

  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

    <div className="navbar-nav ml-auto text-left navbarText">

    <div className="Headerbutton-container">

      <Link to="/" className="link">

      <p className="Headerhover-button HeaderText">HOME</p>

      </Link>

    </div>




    <div className="Headerbutton-container">

      <p className="Headerhover-button   text-center HeaderText">ABOUT US</p>

       
<div  className="Headeroptions">
  <div className="container-fluid">
    <div className="row">
      <div className="col-3">
       <ul className="mr-5">

        <Link to="/career" className="link">

          <option className="Headeroption-item">Career</option>

          </Link>




          <Link to="/customers" className="link">

             <option className="Headeroption-item">Customers</option>

          </Link>




          <Link to="/theteam" className="link">

            <option className="Headeroption-item">The Team</option>

          </Link>




          <Link to="/faqs" className="link">

             <option className="Headeroption-item">FAQs</option>

          </Link>

      </ul>
      </div>

      <div className="col-3">
       <ul>

        <Link to="/career" className="link">

          <option className="Headeroption-item">Career</option>

          </Link>




          <Link to="/customers" className="link">

             <option className="Headeroption-item">Customers</option>

          </Link>




          <Link to="/theteam" className="link">

            <option className="Headeroption-item">The Team</option>

          </Link>




          <Link to="/faqs" className="link">

             <option className="Headeroption-item">FAQs</option>

          </Link>

      </ul>
      </div>

      <div className="col-3">
       <ul>

        <Link to="/career" className="link">

          <option className="Headeroption-item">Career</option>

          </Link>




          <Link to="/customers" className="link">

             <option className="Headeroption-item">Customers</option>

          </Link>




          <Link to="/theteam" className="link">

            <option className="Headeroption-item">The Team</option>

          </Link>




          <Link to="/faqs" className="link">

             <option className="Headeroption-item">FAQs</option>

          </Link>

      </ul>
      </div>

      <div className="col-3">
       <ul>

        <Link to="/career" className="link">

          <option className="Headeroption-item">Career</option>

          </Link>




          <Link to="/customers" className="link">

             <option className="Headeroption-item">Customers</option>

          </Link>




          <Link to="/theteam" className="link">

            <option className="Headeroption-item">The Team</option>

          </Link>




          <Link to="/faqs" className="link">

             <option className="Headeroption-item">FAQs</option>

          </Link>

      </ul>
      </div>
      </div>
  </div>
  </div>
      </div>


    <div className="Headerbutton-container">

      <p className="Headerhover-button HeaderText">SERVICES</p>

      <div className="Headeroptions">

        <Link to="/polarionalm" className="link">

          <option className="Headeroption-item">Polarion ALM</option>

        </Link>




        <Link to="/saascloudsolutions" className="link">

 <option className="Headeroption-item">SAAS & cloud Solutions</option>

        </Link>




        <Link to="/ptcintergrity" className="link">

          <option className="Headeroption-item">PTC Integrity</option>

        </Link>




        <Link to="/mobileappdevelopment" className="link">

            <option className="Headeroption-item">Mobile & APP Development</option>

        </Link>




        <Link to="/mendix" className="link">

          <option className="Headeroption-item">Mendix</option>

        </Link>




        <Link to="/microsoftdynamic" className="link">

           <option className="Headeroption-item">Microsoft Dynamic</option>

        </Link>




        <Link to="/salesforce" className="link">

          <option className="Headeroption-item">Sales Force</option>

        </Link>

         

         <Link to="/training" className="link">

          <option className="Headeroption-item">Training</option>

         </Link>  

      </div>

    </div>




    <div className="Headerbutton-container">

      <Link to="/careers" className="link">

      <p className="Headerhover-button HeaderText">CAREERS</p>

      </Link>

    </div>




    <div className="Headerbutton-container">

      <Link to="/blogs" className="link">

        <p className="Headerhover-button HeaderText">BLOGS</p>

        </Link>

     

    </div>




    <div className="Headerbutton-container">

      <p className="Headerhover-button HeaderText">RESELLER</p>

      <div className="Headeroptions">

          <Link to="/polarion" className="link">

          <option className="Headeroption-item">Polarion</option>

          </Link>

          <Link to="/mendix" className="link">

          <option className="Headeroption-item">Mendix</option>

          </Link>

      </div>

    </div>

   

    <div className="Headerbutton-container">

      <Link to="/contactus" className="link">

        <p className="Headerhover-button HeaderText">CONTACT US</p>

        </Link>

    </div>      

    </div>

  </div>

</nav>
</>

   

)




export default Header