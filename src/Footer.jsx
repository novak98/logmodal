import React from 'react';


export const Footer = (props) => {
    return (
        <div>
            <footer>
                    
                    <nav className="navbar navbar-bottom">
                        <div className="container-fluid">
                       
                          
                          <div className="navbar-header">
                            
                            <a className="pull-left" href="#"><img src="royalplace2.png"/></a>
                          </div>
                       
                         
                          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                              <li><a href="#">The Process</a></li>
                              <li><a href="#">The house</a></li>
                              <li><a href="#">About Botello</a></li>
                              <li><a href="#">F.A.Q.</a></li>
                              <li><a href="#">Contact</a></li>
                            </ul>
                        
                            
                            <form className="navbar-form navbar-right" role="social">
                                <a href="#" className="fa fa-facebook"></a>
                                <a href="#" className="fa fa-instagram"></a>
                                <a href="#" className="fa fa-linkedin"></a>
                            </form>
                          </div>
                        </div>
                      </nav>

         </footer>
        </div>
    )
};