import React from 'react'

function Matching_level() {
  return (
    <div>
        <section id="main-content" className="">
            <div className="wrapper main-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                    <div className="page-title">

                        <div className="pull-left">
                           
                            <h1 className="title">Matching Level Income</h1>
                           
                        </div>

                    </div>
                </div>
              </div>

              <div className="row">
                
                <div className="col-lg-3">
                    <label className='text-white'>Select Level</label>
                    <select className="floating-input form-control select_bg ">
                        <option value="">Select Level</option>
                        <option value="2">All Level</option>
                        <option value="1">Level 1</option>
                        <option value="0">Level 2</option>
                    </select>
                </div>
                    <div className="col-lg-3">
                        <label className='text-white'>Enter From Date</label>
                        <input type="date" name="from_date" id="from_date" className="form-control" placeholder="Enter From Date"/>
                    </div>
                    <div className="col-lg-3">
                        <label className='text-white'>Enter To Date</label>
                        <input type="date" name="to_date" id="to_date" className="form-control"/>
                    </div>
                    <div className="col-md-2">
                        <label></label>
                        <input type="submit" name="to_date" value="Search" className="btn btn-primary mt_5" style={{marginTop: "25px"}}/>
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
                                        <th>From ID </th>
                                        <th>Level</th>
                                        <th>On Amount</th>
                                        <th>Income</th>
                                        <th>Date &amp; Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>378526</td>
                                        <td>378526</td>
                                        <td> 2</td>
                                        <td>$ 38</td>
                                        <td>$ 38</td>
                                        <td>15/11/2022 3:35:3 PM</td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                      </div>
                      <br/>

                  </div>

                      
              </div>
            </div>
        </div></section>
    </div>
  )
}

export default Matching_level