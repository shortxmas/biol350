import { Navbar } from "./Navbar"
import HowTo from './how.webp'
import Flyer from './flyer.jpg'

export const Home = () =>{


  return(


    <>
    
      <div id="flyer">
      <div className="sticky-top">
      <Navbar/>
      </div>

        <div  style={{display:'flex',justifyContent:'center',alignContent:'center',marginTop:50,marginBottom:125,}}>
          
          <img  src={Flyer} className="img-fluid"
          style={{ 
            width:'40%',
            border: '5px solid black',
            borderRadius:20
          }}></img>
         
        </div>
          <hr id="condoms" ></hr>
        <div  style={{display:'flex',justifyContent:'center',alignContent:'center',marginTop:125,marginBottom:125}}>
          <a href="https://www.healthline.com/health/birth-control-condom">
          <img src={HowTo} className="img-fluid"
          style={{ 
           
            border: '5px solid black',
            borderRadius:20
          }}></img>
          </a>
        </div>


        

      </div>
    </>

  )

}