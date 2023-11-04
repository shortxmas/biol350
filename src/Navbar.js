import Logo from './f.png'

export const Navbar = ()=>{

  return(
    <>
      
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
            <div className="container">

            <a href="/#" className="navbar-brand">
            
                    
            <a className="nav-link" href="#flyer">
                <img alt="ff" src={Logo} width="75" className="d-inline-block align-top"></img>
            </a>
       
        

            </a>


                <button className="navbar-toggler" data-bs-toggle = "collapse"
                data-bs-target = "#nav" aria-controls = "nav" aria-label=
                "Expand Navigation">
                    <span className="navbar-toggler-icon">

                    </span>
    
                </button>

                <div className= "collapse navbar-collapse"  id="nav">
                    <ul className="navbar-nav navbar-right nav-routes">
                    
                    
                      
                        <li className="nav-item">
                            <a href="#condoms" className="nav-link">Condoms</a>
                        </li>

                        <li className="nav-item">
                            <a href="#consent" className="nav-link">Consent</a>
                        </li>
                    
                       
                  

                    </ul>
                </div>
                

                <span className="navbar-text" style={{color:'mintcream'}}>
                    <h6>
                    Don't be silly, protect your willy!
                    </h6>
                </span>
        
             

            </div>
            
        
        </nav>
       
       

        

    
      
      


    </>
  )

}