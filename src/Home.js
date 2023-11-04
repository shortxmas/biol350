import { Navbar } from "./Navbar"
import HowTo from './how.webp'
import Flyer from './flyer.jpg'
import Consent from './consent.png'

export const Home = () =>{


  return(


    <>
    
      <div id="flyer">
      <div className="sticky-top">
      <Navbar/>
      </div>

        <div  style={{display:'flex',justifyContent:'center',alignContent:'center',marginTop:50,marginBottom:125,}}>
          
          <img alt="https://icons.veryicon.com/png/o/education-technology/alibaba-cloud-iot-business-department/image-load-failed.png" src={Flyer} className="img-fluid"
          style={{ 
            width:'40%',
            border: '5px solid black',
            borderRadius:20
          }}></img>
         
        </div>
          <hr id="condoms" ></hr>
        <div  style={{display:'flex',justifyContent:'center',alignContent:'center',marginTop:125,marginBottom:125}}>
          <a href="https://www.healthline.com/health/birth-control-condom">
          <img src={HowTo} alt="https://icons.veryicon.com/png/o/education-technology/alibaba-cloud-iot-business-department/image-load-failed.png" className="img-fluid"
          style={{ 
           
            border: '5px solid black',
            borderRadius:20
          }}></img>
          </a>
        </div>

        <hr id="consent" ></hr>
        <div  style={{display:'flex',justifyContent:'center',marginTop:125,marginBottom:125}}>
          <a href="https://www.dawsonwomensshelter.com/blog/consent-is-everything">
          <img alt="https://icons.veryicon.com/png/o/education-technology/alibaba-cloud-iot-business-department/image-load-failed.png" src={Consent} className="img-fluid"
          style={{ 
            
           
            border: '5px solid black',
            borderRadius:20
          }}></img>
          </a>
        </div>
        <hr></hr>
        <div style={{display:'flex',justifyContent:'center',marginTop:20,marginBottom:20}}>
          Made by : Gabrielle Huliganga, Leighton Miguel, Blake Ilagan
        </div>


        

      </div>
    </>

  )

}