import React from 'react';
import horse from '../../Assets/horse.jpeg';
import horse1 from '../../Assets/horse1.jpeg';
import horse2 from '../../Assets/horse2.jpeg';
import horse3 from '../../Assets/horse3.jpeg';
import horse4 from '../../Assets/horse4.png';
import horse5 from '../../Assets/horse5.jpg';
import horse6 from '../../Assets/horse6.jpg';
import horse7 from '../../Assets/horse7.jpg';
import horse8 from '../../Assets/horse8.jpg';
import horse9 from '../../Assets/horse9.png';
import horse10 from '../../Assets/horse10.jpeg';
import "./Mint.css";


function Mint() {
  return (
    <div id="main-content">
        <div className="wrapper main-wrapper">
                <div className="container">
              <div className="row">
                <div className="col-md-12">
                    <div className="page-title">

                        <div className="pull-left">
                           
                            <h1 className="title">Mint</h1>
                           
                        </div>

                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="img_single text-white">
                    Single NFT
                    </div>
                </div>

                 <div className="col-lg-2">
                   <div className="horse">
                    <img src={horse} className="img_horse"/>
                    <h3 id="number1" className="btn_value"> $ 100 GLEBA</h3>
                   </div>
                </div>

                <div className="col-lg-2">
                   <div className="horse">
                    <img src={horse1} className="img_horse"/>
                    <h3 id="number1" className="btn_value"> $ 500 WASSER</h3>
                   </div>
                </div>

                <div className="col-lg-2">
                   <div className="horse">
                    <img src={horse2} className="img_horse"/>
                    <h3 id="number1" className="btn_value"> $ 1000 ZRAK</h3>
                   </div>
                </div>

                <div className="col-lg-2">
                   <div className="horse">
                    <img src={horse3} className="img_horse"/>
                    <h3 id="number1" className="btn_value"> $ 2500 BRANNBIL</h3>
                   </div>
                </div>
                 <div className="col-lg-2">
                   <div className="horse">
                    <img src={horse4} className="img_horse"/>
                    <h3 id="number1" className="btn_value"> $ 5000 FOUDRE</h3>
                   </div>
                </div>
              </div>
              <br/>

              <div className="row">
                <div className="col-lg-2">
                    <div className="img_single text-white">
                    Couple NFT
                    </div>
                </div>

                 <div className="col-lg-2">
                   <div className="horse">
                    <img src={horse5} className="img_horse"/>
                    <h3 id="number1" className="btn_value"> $ 200 GLEBA</h3>
                   </div>
                </div>

                <div className="col-lg-2">
                   <div className="horse">
                    <img src={horse6} className="img_horse"/>
                    <h3 id="number1" className="btn_value"> $ 1000 WASSER</h3>
                   </div>
                </div>

                <div className="col-lg-2">
                   <div className="horse">
                    <img src={horse7} className="img_horse"/>
                    <h3 id="number1" className="btn_value"> $ 2000 ZRAK</h3>
                   </div>
                </div>

                <div className="col-lg-2">
                   <div className="horse">
                    <img src={horse8} className="img_horse"/>
                    <h3 id="number1" className="btn_value"> $ 5000 BRANNBIL</h3>
                   </div>
                </div>
                 <div className="col-lg-2">
                   <div className="horse">
                    <img src={horse9} className="img_horse"/>
                    <h3 id="number1" className="btn_value"> $ 10000 FOUDRE</h3>
                   </div>
                </div>
              </div>
              <br/>
              <div className="row ">
                   <div className="col-lg-6 mt-5  horse">
                      <img src={horse10} className="" alt="Metamax NFT" width="100%" style={{borderRadius: "50px"}}/>
                      <p className="text-dark btn_value text-center text-white mt-4" id="number1">Selected NFT</p>
                   </div>
                   <div className=" col-lg-6 col-12 d-flex flex-column  align-items-left  mint_bottom">
                      <div className="mybtnclass"><button id="decrease" value="Decrease Value">-</button><input type="text " readonly="" id="number" value="1"/><button id="increase" value="Increase Value">+</button></div>
                      <div className="btnallhere">
                         <div className="mt-5 mt-3 btnandP">
                            <button className="btn mintbtn1"><span id="cstbtn" className="cstbtn text-white">LAR And Wire</span></button>
                            <p className="stakepageP  ms-4 mt-2   fw-3">(LAR : 0 ) (<span>WIRE :</span>    <span>0</span> ) </p>
                         </div>
                         <div className="d-flex  mt-lg-3 btnandP ">
                            <button className="btn mintbtn"><span id="bnbbtnhere" className="cstbtn">Mint With LAR</span></button>
                            <p className="stakepageP  ms-4 mt-2   fw-3">(<span classnamename="stakepageP">LAR :</span> <span id="Metamaxmint" classnamename="stakepageP">0</span>) </p>
                         </div>
                         <div className="d-flex  mt-lg-3 btnandP ">
                            <button className="btn mintbtn"><span id="bnbbtnhere" className="cstbtn">BNB And Wire</span></button>
                            <p className="stakepageP  ms-4 mt-2   fw-3">(<span classnamename="stakepageP">BNB :</span> <span id="Metamaxmint" classnamename="stakepageP">0</span>) (<span>WIRE :</span>    <span>0</span> ) </p>
                         </div>
                         
                      </div>
                   </div>
                </div>

                
                
                
            </div>
        </div>
    </div>
  )
}

export default Mint