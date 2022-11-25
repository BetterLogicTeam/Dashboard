import React from 'react'

function Sports_bonus() {
  return (
    <div>
        <section id="main-content" className="">
            <div className="wrapper main-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                    <div className="page-title">

                        <div className="pull-left">
                           
                            <h1 className="title">Sports Bonus</h1>
                           
                        </div>

                    </div>
                </div>
              </div>

              <div className="row">
                
                <div className="col-lg-3">
                    <label className='text-white'>Select Income Type</label>
                    <select className="floating-input form-control select_bg ">
                        <option value="">All Income</option>
                        <option value="2">Referral Income</option>
                        <option value="1">Quick Starter Bonus</option>
                        <option value="0">Matching Level Income</option>
                        <option value="0">Withdrawal Share Bonus</option>
                    </select>
                </div>
                   
               </div>
                <br/>

                 <div className="row">
                    <div className="col-md-12">

                        <div className="table-responsive">
                            <table cellpadding="0" cellspacing="0" className="table align-middle mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th>S.NO</th>
                                        <th>User ID</th>
                                        <th>Amount </th>
                                       
                                        <th>On Amount</th>
                                       
                                        <th>Date &amp; Time</th>
                                         <th>Income Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>778899</td>
                                        <td>0.25</td>
                                        <td> 4.75</td>
                                        
                                        <td>15/11/2022 3:35:3 PM</td>
                                        <td>Referral Income</td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                      <br/>
                    </div>

                      
                 </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Sports_bonus