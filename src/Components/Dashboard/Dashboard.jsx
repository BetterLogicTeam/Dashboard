import React from 'react';
import { BsFillPersonFill, BsShieldShaded } from 'react-icons/bs';
import { MdDesktopMac } from 'react-icons/md';
import { ImLifebuoy } from 'react-icons/im';
import "./Dashboard.css";
import globe from '../../Assets/globe.png';
import { useState } from "react";
// import { Data } from "./Data";
import LineChart from "../LineChart/LineChart";
// import "./styles.css";
import { UserData } from "./Data";

function Dashboard() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
            color: "#fff",
          },
        ],
      });
  return (
    <div>
      <div className="dashboard_main">
        <div className="container">
            <div className="row">
            <div className="col-xs-7">
                    <div className="page-title">

                        <div className="pull-left">
                           
                            <h1 className="title">General Statistics</h1>
                           
                        </div>

                    </div>
                </div>

                <div className="col-lg-7 main_bgp">
                
                  <div className="col-lg-12">
                    <section className="box nobox marginBottom0">
                        <div className="content-body">
                            <div className="row">
                               
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <div className="statistics-box">
                                        <div className=" main">
                                            
                                            <div className="stats">
                                                <h3 className="boldy mb-5">Today's Money</h3>
                                                <span> $ 57858</span>
                                            </div>
                                            <div className="icon-md icon-primary">
                                               
                                            <BsFillPersonFill />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <div className="statistics-box">
                                        <div className=" main">
                                            
                                            <div className="stats">
                                                <h3 className="boldy mb-5">Today's Money</h3>
                                                <span> $ 57858</span>
                                            </div>
                                            <div className="icon-md icon-primary">
                                               
                                               <MdDesktopMac />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <div className="statistics-box">
                                        <div className=" main">
                                            
                                            <div className="stats">
                                                <h3 className="boldy mb-5">Today's Money</h3>
                                                <span> $ 57858</span>
                                            </div>
                                            <div className="icon-md icon-primary">
                                               
                                               <ImLifebuoy />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                   <div className="statistics-box">
                                        <div className=" main">
                                            
                                            <div className="stats">
                                                <h3 className="boldy mb-5">Today's Money</h3>
                                                <span> $ 57858</span>
                                            </div>
                                            <div className="icon-md icon-primary">
                                               
                                               <BsShieldShaded />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                  </div> 

                  <div className="col-lg-12">
                    <section className="box_main">
                        <header className="panel_header">
                            <h2 className="title pull-left">Transactions History</h2>
                             <div className="actions panel_actions pull-right title pull-right">
                                <a className="box_toggle fa fa-chevron-down"></a>
                                <a className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings"></a>
                                <a className="box_close fa fa-times"></a>
                            </div>
                        </header>
                        <div className="content-body">
                            <div className="row">
                                <div className="col-xs-12">

                                    <div className="table-responsive" data-pattern="priority-columns">
                                        <table id="tech-companies-1" className="table vm trans table-small-font no-mb table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Crypto Trade</th>
                                                    <th>Time</th>
                                                    <th>Status</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                         <div className="round img2">
                                                            <img src="assets/crypto-dash/coin1.png" alt=""/>
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Bitcoin</h6>
                                                        </div>
                                                    </td>
                                                    <td><small className="text-muted">10:23:45</small></td>
                                                    <td><span className="badge  w-70 round-success">completed</span></td>
                                                    <td className="green-text boldy">+0,041BTC</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                         <div className="round img2">
                                                            <img src="assets/crypto-dash/coin8.png" alt=""/>
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Litecoin</h6>
                                                        </div>
                                                    </td>
                                                    <td><small className="text-muted">12:53:25</small></td>
                                                    <td><span className="badge w-70 round-warning">Pending</span></td>
                                                    <td className="red-text boldy">-1,176LTC</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                         <div className="round img2">
                                                            <img src="assets/crypto-dash/coin2.png" alt=""/>
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Ethereum</h6>
                                                        </div>
                                                    </td>
                                                    <td><small className="text-muted">04:03:25</small></td>
                                                    <td><span className="badge w-70 round-primary">exchanged </span></td>
                                                    <td className="blue-text boldy">0.023ETH</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                         <div className="round img2">
                                                            <img src="assets/crypto-dash/coin4.png" alt=""/>
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Ripple</h6>
                                                        </div>
                                                    </td>
                                                    <td><small className="text-muted"> 09:33:02</small></td>
                                                    <td><span className="badge w-70 round-danger">Canceled</span></td>
                                                    <td className="green-text boldy">+107,0XRP</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                         <div className="round img2">
                                                            <img src="assets/crypto-dash/coin1.png" alt=""/>
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Bitcoin</h6>
                                                        </div>
                                                    </td>
                                                    <td><small className="text-muted">10:23:45</small></td>
                                                    <td><span className="badge  w-70 round-warning">pending</span></td>
                                                    <td className="green-text boldy">-0,098BTC</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                         <div className="round img2">
                                                            <img src="assets/crypto-dash/coin3.png" alt=""/>
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Dashcoin</h6>
                                                        </div>
                                                    </td>
                                                    <td><small className="text-muted">09:33:02</small></td>
                                                    <td><span className="badge w-70 round-success">Completed</span></td>
                                                    <td className="red-text boldy">-2,76DAH</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                         <div className="round img2">
                                                            <img src="assets/crypto-dash/coin5.png" alt=""/>
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Bitdash</h6>
                                                        </div>
                                                    </td>
                                                    <td><small className="text-muted">09:33:02</small></td>
                                                    <td><span className="badge w-70 round-success">Completed</span></td>
                                                    <td className="green-text boldy">+1,429DAH</td>
                                                </tr>
                                                

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    
                  </div>
                  
                </div>

                <div className="col-lg-5">
                  <div id="box"></div>
                   {/* <img src={globe} id="box"/> */}
                </div>

                <div className="col-lg-12 graph">
                   <div className="col-xs-12 col-lg-5">
                    <section className="box_main ">
                        <header className="panel_header">
                            <h2 className="title pull-left">Transactions Status</h2>
                            
                        </header>
                        <div className="content-body pb10">
                            <div className="row">
                                <div className="col-xs-12 mb-20">
                                    <img src="graph_1.png" alt="" />
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="token-info">
                                        <div className="info-wrapper three">
                                            <div className="token-descr text-white">
                                                <h3 className="bold mt-0 mb-0">44%</h3>
                                                Completed
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="token-info ">
                                        <div className="info-wrapper five">
                                            <div className="token-descr text-white">
                                                <h3 className="bold mt-0 mb-0">34%</h3>
                                                Pending
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="token-info">
                                        <div className="info-wrapper two">
                                            <div className="token-descr text-white">
                                                <h3 className="bold mt-0 mb-0">22%</h3>
                                                Cancelled
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 col-xs-12">
                                    <div className="token-info">
                                        <div className="info-wrapper default">
                                            <div className="token-descr text-white">
                                                <h3 className="bold mt-0 mb-0">14%</h3>
                                                Others
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                   </div>
                    <div className="col-xs-12 col-lg-5">
                      <section className="box_main ">
                        <header className="panel_header">
                            <h2 className="title pull-left">Sales Overview</h2>
                            
                        </header>
                        <div className="content-body pb10">
                            <div className="row">
                                <div className="col-xs-12 mb-20">
                                <img src="graph_2.png" alt="" />
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="token-info padddig">
                                        <div className="info-wrapper three">
                                            <div className="token-descr text-white">
                                                <h3 className="bold mt-0 mb-0">44%</h3>
                                                Completed
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <div className="token-info padddig">
                                        <div className="info-wrapper five">
                                            <div className="token-descr text-white">
                                                <h3 className="bold mt-0 mb-0">34%</h3>
                                                Pending
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                      </section>
                    </div>
                  </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard