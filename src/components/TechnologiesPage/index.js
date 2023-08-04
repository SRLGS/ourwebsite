import React from 'react';
import { useInView } from 'react-intersection-observer';

import "./index.css"

const TechnologiesPage=()=>{
    return(
    <div className="totalIndustriesPageContainer">
        <div className="ToolsPageContainer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="IndustiesHeading text-center text-uppercase">Technologies</h3>
                        <div className="h-line" ></div>
                    </div>
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                            <div  className="col-4 col-lg-3 text-center">
                    <div className="imageContainer  text-center">
                        <ImageElement alt="" className="technologyIndustriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690542326/1_W3ZHer9j6Cxzh78m0jLLdw_z0lgko.png" />
                        </div>
                    </div>

                    
                    <div className="col-4 col-lg-3  text-center">
                    <div className="imageContainer  text-center">
                        <ImageElement alt="" className="technologyIndustriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690544863/1631026680-logo-react-native_n8ehly.png" />
                        </div>
                    </div>

                    
                    <div className="col-4 col-lg-3 text-center">
                    <div className="imageContainer  text-center">
                        <ImageElement alt="" className="technologyIndustriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690544975/1631110818-logo-react-js_plbsqn.png" />             
                        </div>
                    </div>


                    <div className="col-4 col-lg-3 text-center">
                    <div className="imageContainer  text-center">
                        <ImageElement alt="" className="technologyIndustriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690547463/logos-33_afkydt.png" />             
                        </div>
                    </div>
                    
                    <div className="col-4 col-lg-3 text-center">
                    <div className="imageContainer  text-center">
                        <ImageElement alt="" className="technologyIndustriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690545282/AngularShieldLogo_c11tht.png" />
                        </div>
                    </div>

                    <div className="col-4 col-lg-3 text-center">
                    <div className="imageContainer">
                        <ImageElement alt="" className="technologyIndustriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690546367/download_1_kfcee9.png" />        
                        </div>
                    </div>

                    <div className="col-4 col-lg-3 text-center">
                    <div className="imageContainer">
                        <ImageElement alt="nothing" className="technologyIndustriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690547302/logos-03_ic1omu.png" />
                        </div>
                    </div>



                    <div className="col-4 col-lg-3  text-center">
                    <div className="imageContainer">
                        <ImageElement alt="" className="technologyIndustriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690547116/logos-02_n8irwk.png" />
                        </div>
                        </div>


                        <div className="col-4 col-lg-3  text-center">
                    <div className="imageContainer">
                        <ImageElement alt="" className="technologyIndustriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690547846/logos-14_qcdlgt.png" />
                        </div>
                        </div>


                        <div className="col-4 col-lg-3  text-center">
                    <div className="imageContainer">
                        <ImageElement alt="" className="technologyIndustriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690548097/logos-09_kpehpk.png" />
                        </div>
                        </div>


                        <div className="col-4 col-lg-3  text-center">
                    <div className="imageContainer">
                        <ImageElement alt="" className="technologyIndustriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690548000/logos-12_im6muo.png" />
                        </div>
                        </div>


                        <div className="col-4 col-lg-3  text-center">
                    <div className="imageContainer">
                        <ImageElement alt="" className="technologyIndustriesImage" src ="https://res.cloudinary.com/dkajxnnlq/image/upload/v1690547762/logos-13_fcqutd.png" />
                        </div>
                        </div>

                    

                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
)
    }


    const ImageElement = ({ src, className, alt }) => {
        const [visible, setVisible] = React.useState(false);
        const { ref, inView } = useInView({
          triggerOnce: true,
        });
      
        React.useEffect(() => {
          if (inView) {
            setVisible(true);
          }
        }, [inView]);
      
        return (
          <div className={`image-evolution ${visible ? 'evolved' : ''}`} ref={ref}>
            <img src={src} className={className} alt={alt} />
          </div>
        );
      };
      

export default TechnologiesPage