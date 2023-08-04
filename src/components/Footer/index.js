
import { BiPhoneCall, BiLogoFacebook,BiLogoGmail } from "react-icons/bi";

import { FaGreaterThan } from "react-icons/fa";

import {TiSocialLinkedin } from "react-icons/ti";



import { AiOutlineTwitter } from "react-icons/ai";

import "./index.css"

const Footer=()=>(
    <div className="TotalFooterContainer">
        <div className="footerContainer">
            <div className="container">
                <div className="row">
                    <div className="col-3">
            <div className="footerContent pt-3">
                <p>LABYRINTH GLOBAL SOLUTIONS LGS <br/>
                 has the required experience to help architect, 
                 design, develop and deliver any technical solution
                  to your organization..</p>  
                  <div className="footerIconsContainer p-2">
                    <div >
                        <BiLogoFacebook className="footerIcon bg-secondary" size="30" height="30" color="#0edae8"/>
                    </div>
                    <div >
                        <AiOutlineTwitter  className="footerIcon bg-secondary" size="30" height="30" color="#0edae8"/>
                    </div>
                    <div>
                        <TiSocialLinkedin className="footerIcon bg-secondary" size="30" height="30" color="#0edae8"/>
                    </div>
                  </div>
            </div>
            </div>
            <div className="col-3">
            <div className="footerContact">
                <h1 className="footerHeader">Contact info</h1>
                <hr className="footerHorizontalLine"/>
            <ol className="footerContactListClumzi">
                <li className="footerContactListItem ListItem1">
                    <div>
                    <BiPhoneCall size="15" color="#0edae8"/>
                    </div>
                    <p className="pl-2">+91 8919078185</p>
                </li>

                <li className="footerContactListItem ListItem2">
                    <div className="footerIcon">
                    <BiLogoGmail  size="15" color="#0edae8"/>
                    </div>
                    <div className="Footerdiv">
                    <p className="pl-2">info@labyrinthglobalsolutions
                        <br/>
                Address: 16-8-933/3, Government 
                Printing Press Rd, Officers Colony,
                 Malakpet, Hyderabad,
                    Telangana</p>
                    </div>
                </li>
                
                </ol>
            </div> 
            </div> 
            <div className="col-3">

            <div className="footerUsefullLinks">
                <h1 className="footerHeader">Useful Links</h1>
                <hr className="footerHorizontalLine"/>

                <ol className="footerContactList">
                <li className="footerContactListItem ListItem3">
                    <div className="footerIcon">
                    <FaGreaterThan size="15" color="#0edae8"/>
                    </div>
                    <p className="pl-2 pt-2">Home</p>
                </li>

                <li className="footerContactListItem ListItem4">
                    <div className="footerIcon">
                    <FaGreaterThan size="15" color="#0edae8"/>
                    </div>
                    <p className="pl-2 pt-2">About Us</p>
                </li>

                <li className="footerContactListItem ListItem5">
                    <div className="footerIcon">
                    <FaGreaterThan size="15" color="#0edae8"/>
                    </div>
                    <p className="pl-2 pt-2">FAQ</p>
                </li>

                <li className="footerContactListItem ListItem6">
                    <div className="footerIcon">
                    <FaGreaterThan size="15" color="#0edae8"/>
                    </div>
                    <p className="pl-2 pt-2">Policies</p>
                </li>
                </ol>
            </div>
            </div>
            <div className="col-3">
            <div className="footerServices">
                <h1 className="footerHeader">Our Services</h1>
                <hr className="footerHorizontalLine"/>
                <ol className="footerContactList">
                <li className="footerContactListItem ListItem7">
                    <div className="footerIcon">
                    <FaGreaterThan size="15" color="#0edae8"/>
                    </div>
                    <p className="pl-2 pt-2">Polarion ALM</p>
                </li>
                <li className="footerContactListItem ListItem8">
                    <div className="footerIcon">
                    <FaGreaterThan size="15" color="#0edae8"/>
                    </div>
                    <p className="pl-2 pt-2">SAAS & Cloud Solutions</p>
                </li>
                <li className="footerContactListItem ListItem9">
                    <FaGreaterThan size="15" color="#0edae8"/>
                    <p className="pl-2 pt-2">PTC Integrity</p>
                </li>
                <li className="footerContactListItem ListItem4">
                    <div className="footerIcon">
                    <FaGreaterThan size="15" color="#0edae8"/>
                    </div>
                    <p className="pl-2 pt-2">Mendix</p>
                </li>
                <li className="footerContactListItem ListItem4">
                    <div className="footerIcon">
                    <FaGreaterThan size="15" color="#0edae8"/>
                    </div>
                    <p className="pl-2 pt-2">Web Development</p>
                </li>
                </ol>
            </div>
            </div>
            </div>
            </div>
            </div>
    </div>
)

export default Footer