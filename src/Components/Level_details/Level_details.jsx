import React from 'react'

function Level_details() {
  return (
    <div>
        <section id="main-content" className="">
            <div className="wrapper main-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                    <div className="page-title">

                        <div className="pull-left">
                    lg
                            <h1 className="title">Level Details</h1>
                           
                        </div>

                    </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3">
                    <label className="text-white">Select Level</label>
                    <select className="floating-input form-control select_bg ">
                        <option value="">Select Level</option>
                        <option value="2">All Level</option>
                        <option value="1">Level 1</option>
                        <option value="0">Level 2</option>
                        <option value="0">Level 3</option>
                        <option value="0">Level 4</option>
                        <option value="0">Level 5</option>
                        <option value="0">Level 6</option>

                    </select>
                </div>
                <div className="col-lg-3">
                    <label className="text-white">Choose Status</label>
                    <select className="floating-input form-control select_bg ">
                        <option value="">Select Status</option>
                        <option value="2">All</option>
                        <option value="1">Active</option>
                        <option value="0">In-Active</option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <label className="text-white">Position</label>
                    <select className="floating-input form-control select_bg ">
                        <option value="">Select Position</option>
                        <option value="2">All</option>
                        <option value="1">Left</option>
                        <option value="0">Right</option>
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
                                        <th>#</th>
                                        <th>Package Amount</th>
                                        <th>Remark </th>
                                        <th>Txn</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>100 USD</td>
                                        <td>Activate</td>
                                        <td> <a href="#">View txn</a></td>
                                        <td>20-05-2022</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>100 USD</td>
                                        <td>Upgrade</td>
                                        <td> <a href="#">View txn</a></td>
                                        <td>20-05-2022</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>100 USD</td>
                                        <td>Upgrade</td>
                                        <td> <a href="#">View txn</a></td>
                                        <td>20-05-2022</td>
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

export default Level_details