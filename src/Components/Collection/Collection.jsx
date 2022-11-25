import React from 'react';
import colection_1 from '../../Assets/colection_1.png';
import colection_2 from '../../Assets/colection_2.png';
import colection_3 from '../../Assets/colection_3.png';
import colection_4 from '../../Assets/colection_4.png';


function Collection() {
  return (
    <div>
        <section id="main-content" className="">
            <div className="wrapper main-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                    <div className="page-title">

                        <div className="pull-left">
                           
                            <h1 className="title">Collection</h1>
                           
                        </div>

                    </div>
                </div>
            </div>
            <div className="row">

               <div className="col-md-3 mt-5 ">
                         <div className="nft-thumb">
                            <img src={colection_1} alt="Metamax NFT" width="100%" className="img_nft"/></div>
                    </div>
                
              

                    <div className="col-md-3 d-flex justify-content-center align-items-center mt-5 ">
                         <div className="nft-thumb">
                            <img src={colection_2} alt="Metamax NFT" width="100%" className="img_nft"/></div>
                    </div>

                    <div className="col-md-3 d-flex justify-content-center align-items-center mt-5 ">
                         <div className="nft-thumb">
                            <img src={colection_3} alt="Metamax NFT" width="100%" className="img_nft"/></div>
                    </div>

                    <div className="col-md-3 d-flex justify-content-center align-items-center mt-5 ">
                         <div className="nft-thumb">
                            <img src={colection_4} alt="Metamax NFT" width="100%" className="img_nft"/></div>
                    </div>
                
              </div>
              <br/>

              
            </div>
        </div>
        </section>
    </div>
  )
}

export default Collection