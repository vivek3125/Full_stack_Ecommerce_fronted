import React from 'react';
import img1 from '../image/img1.jpg'
import img2 from '../image/img2.jpg'
import img3 from '../image/img3.jpg'
const Crousal = () => {
     return (
          <>
               <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                         <div className="carousel-item active">
                              <img className="d-block w-100" src={img1} alt="First slide"/>
                         </div>
                         <div className="carousel-item">
                              <img className="d-block w-100" src={img2} alt="Second slide"/>
                         </div>
                         <div className="carousel-item">
                              <img className="d-block w-100" src={img3} alt="Third slide"/>
                         </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span className="sr-only"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                         <span className="sr-only"></span>
                    </a>
               </div>
          </>
     );
}

export default Crousal;
