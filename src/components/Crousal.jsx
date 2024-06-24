import React from 'react';

const Crousal = () => {

     return (
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
               <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
               </ol>
               <div className="carousel-inner">
                    <div className="carousel-item active">
                         <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                         <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a10b11c60d158290.jpg?q=20" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                         <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e1c77383c5405c7c.jpg?q=20" alt="Third slide" />
                    </div>
               </div>
               <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
               </a>
               <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
               </a>
          </div>
     );
}

export default Crousal;
