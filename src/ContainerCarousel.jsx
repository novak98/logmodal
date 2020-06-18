import React from 'react';

export const ContainerCarousel = (props) => {
    return (
        <div>
        <div className="container-carousel">
            <div style={{ margin: '25px'}}>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div id="theCarousel" className="carousel slide" data-ride="carousel">
     
                
                <ol className="carousel-indicators">
                  <li data-target="#theCarousel" data-slide-to="0" className="active"> </li>
                  <li data-target="#theCarousel" data-slide-to="1"> </li>
                  <li data-target ="#theCarousel" data-slide-to="2"> </li>
                </ol>
               
                
                <div className="carousel-inner">
                  <div className="item active" >
                  <div className ="slide1"></div>
                </div>
                <div className="item">
                <div className="slide2"></div>
                </div>
                <div className="item">
                <div className="slide3"></div>
                </div>
                </div>
               
                
                <a className="left carousel-control" href="#theCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"> </span>
                </a>
                <a className="right carousel-control" href="#theCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
                </div>
               </div>
               <div className="col-lg-6 col-md-5 col-sm-12 col-xs-12">
                <h1>House Details</h1><br/>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br/>
                <a href="#">Download Botello House Equipment</a>
                </div>
              </div>
             </div>
             <div className="containerbg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <h1 >Lorem ipsum</h1><br/>
                    <h3>Lorem ipsum dolor sit amet</h3><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla at libero at finibus. Mauris dui felis, sagittis in dapibus eget, porta quis elit. Donec sodales placerat porta. </p><br/>
                    <h3>Lorem ipsum dolor sit amet</h3><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla at libero at finibus. Mauris dui felis, sagittis in dapibus eget, porta quis elit. Donec sodales placerat porta. Vivamus laoreet magna eget facilisis condimentum. Donec porttitor elit nibh, et mollis nunc egestas at. </p><br/>
                    <h3>Lorem ipsum dolor sit amet</h3><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla at libero at finibus. Mauris dui felis, sagittis in dapibus eget, porta quis elit. Donec sodales placerat porta. Vivamus laoreet magna eget facilisis condimentum. Donec porttitor elit nibh, et mollis nunc egestas at. </p><br/>
                  </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <img className="stats" src="img1.JPG" alt=""/>
              </div>
             </div>
            </div>
            </div>
            </div>
    )

};